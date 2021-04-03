import { Dispatch } from 'redux';
import { ResponseType } from '../api';
import { usersAPI } from '../api/users-api';
import { UserType } from '../types/types';
import { updateObjectInArray } from '../utils/validators/object-helpers';
import { BaseThunkType, InferActionsTypes } from './redux-store';

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, //array of users ids
    filter: {
        term: '',
        friend: null as null | boolean,
    },
};

const usersReducer = (
    state = initialState,
    action: ActionsTypes
): InitialState => {
    switch (action.type) {
        case 'SN/USERS/FOLLOW': {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {
                    followed: true,
                }),
            };
        }
        case 'SN/USERS/UNFOLLOW': {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {
                    followed: false,
                }),
            };
        }
        case 'SN/USERS/SET_USERS': {
            return { ...state, users: action.users };
        }
        case 'SN/USERS/SET_CURRENT_PAGE': {
            return { ...state, currentPage: action.currentPage };
        }
        case 'SN/USERS/SET_TOTAL_USERS_COUNT': {
            return { ...state, totalUsersCount: action.totalUsersCount };
        }
        case 'SN/USERS/TOGGLE_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching };
        }
        case 'SN/USERS/SET_FILTER': {
            return { ...state, filter: action.payload };
        }
        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(
                          (id) => id !== action.userId
                      ),
            };
        }
        default:
            return state;
    }
};

export const actions = {
    followSuccess: (userId: number) => {
        return {
            type: 'SN/USERS/FOLLOW',
            userId,
        } as const;
    },

    unfollowSuccess: (userId: number) => {
        return {
            type: 'SN/USERS/UNFOLLOW',
            userId,
        } as const;
    },

    setUsers: (users: Array<UserType>) => {
        return {
            type: 'SN/USERS/SET_USERS',
            users,
        } as const;
    },

    setCurrentPage: (currentPage: number) => {
        return {
            type: 'SN/USERS/SET_CURRENT_PAGE',
            currentPage,
        } as const;
    },

    setFilter: (filter: FilterType) => {
        return {
            type: 'SN/USERS/SET_FILTER',
            payload: filter,
        } as const;
    },

    setTotalUsersCount: (totalUsersCount: number) => {
        return {
            type: 'SN/USERS/SET_TOTAL_USERS_COUNT',
            totalUsersCount,
        } as const;
    },

    toggleIsFetching: (isFetching: boolean) => {
        return {
            type: 'SN/USERS/TOGGLE_IS_FETCHING',
            isFetching,
        } as const;
    },

    toggleFollowingProgress: (isFetching: boolean, userId: number) => {
        return {
            type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
            isFetching,
            userId,
        } as const;
    },
};

// САНКИ

export const requestUsers = (
    currentPage: number,
    pageSize: number,
    filter: FilterType
): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(currentPage));
        dispatch(actions.setFilter(filter));
        const data = await usersAPI.getUsers(
            currentPage,
            pageSize,
            filter.term,
            filter.friend
        );
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    };
};

const _followUnfollowFlow = async (
    dispatch: Dispatch<ActionsTypes>,
    userId: number,
    apiMethod: (userId: number) => Promise<ResponseType>,
    actionCreator: (userId: number) => ActionsTypes
) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    const response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(
            dispatch,
            userId,
            usersAPI.follow.bind(usersAPI),
            actions.followSuccess
        );
    };
};
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(
            dispatch,
            userId,
            usersAPI.unfollow.bind(usersAPI),
            actions.unfollowSuccess
        );
    };
};

export default usersReducer;

export type InitialState = typeof initialState;
export type FilterType = typeof initialState.filter;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;
