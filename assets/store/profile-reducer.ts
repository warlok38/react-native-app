import { FormAction, stopSubmit } from 'redux-form';
import { ProfileAPI } from '../api/profile-api';
import { PhotosType, PostType, ProfileType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './redux-store';

const initialState = {
    posts: [
        { id: 1, message: 'Hi how are you', likesCount: 15 },
        { id: 2, message: 'it is my first post', likesCount: 7 },
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
};

const profileReducer = (
    state = initialState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/ADD-POST': {
            const newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case 'SN/PROFILE/SET_USER_PROFILE': {
            return { ...state, profile: action.profile };
        }
        case 'SN/PROFILE/SET_STATUS': {
            return { ...state, status: action.status };
        }
        case 'SN/PROFILE/DELETE_POST': {
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.postId),
            };
        }
        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS': {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos,
                } as ProfileType,
            };
        }
        default:
            return state;
    }
};

export const actions = {
    addPostActionCreator: (newPostText: string) =>
        ({
            type: 'SN/PROFILE/ADD-POST',
            newPostText,
        } as const),
    deletePost: (postId: number) =>
        ({
            type: 'SN/PROFILE/DELETE_POST',
            postId,
        } as const),
    setUserProfile: (profile: ProfileType) =>
        ({
            type: 'SN/PROFILE/SET_USER_PROFILE',
            profile,
        } as const),
    setStatus: (status: string) =>
        ({
            type: 'SN/PROFILE/SET_STATUS',
            status,
        } as const),
    savePhotoSuccess: (photos: PhotosType) =>
        ({
            type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS',
            photos,
        } as const),
};

// САНКИ

export const getUserProfile = (userId: number): ThunkType => async (
    dispatch
) => {
    const data = await ProfileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
};

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    const data = await ProfileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
};
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        const data = await ProfileAPI.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(actions.setStatus(status));
        }
    } catch (error) {
        //error handler
    }
};
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await ProfileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
};
export const saveProfile = (profile: ProfileType): ThunkType => async (
    dispatch,
    getState
) => {
    const userId = getState().auth.userId;
    const data = await ProfileAPI.saveProfile(profile);

    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId));
        } else {
            throw new Error(`userId can't be null`);
        }
    } else {
        dispatch(stopSubmit('edit-profile', { _error: data.messages[0] }));
        // dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.messages[0]} }))
        return Promise.reject(data.messages[0]);
    }
};

export default profileReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;
