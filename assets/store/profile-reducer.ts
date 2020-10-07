// import { ProfileAPI, usersAPI } from '../api';
import { PhotosType, PostType, ProfileType } from '../types/types';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

const initialState = {
    posts: [
        { id: 1, message: 'Hi how are you', likesCount: 15 },
        { id: 2, message: 'it is my first post', likesCount: 7 },
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: '',
};

export type InitialStateType = typeof initialState;

const profileReducer = (
    state = initialState,
    action: any
): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case SET_STATUS: {
            return { ...state, status: action.status };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.postId),
            };
        }
        case SAVE_PHOTO_SUCCESS: {
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

//actions
type addPostActionCreatorActionType = {
    type: typeof ADD_POST;
    newPostText: string;
};

export const addPostActionCreator = (
    newPostText: string
): addPostActionCreatorActionType => {
    return {
        type: ADD_POST,
        newPostText,
    };
};

type setDeletePostActionType = {
    type: typeof DELETE_POST;
    postId: number;
};

export const deletePost = (postId: number): setDeletePostActionType => {
    return {
        type: DELETE_POST,
        postId,
    };
};

type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE;
    profile: ProfileType;
};

export const setUserProfile = (
    profile: ProfileType
): setUserProfileActionType => {
    return {
        type: SET_USER_PROFILE,
        profile,
    };
};

type setSetStatusActionType = {
    type: typeof SET_STATUS;
    status: string;
};

export const setStatus = (status: string): setSetStatusActionType => {
    return {
        type: SET_STATUS,
        status,
    };
};

type setSavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS;
    photos: PhotosType;
};

export const savePhotoSuccess = (
    photos: PhotosType
): setSavePhotoSuccessActionType => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos,
    };
};

// САНКИ

// export const getUserProfile = (userId: number) => async (dispatch: any) => {
//     const response = await usersAPI.getProfile(userId);
//     dispatch(setUserProfile(response.data));
// };

// export const getStatus = (userId: number) => async (dispatch: any) => {
//     const response = await ProfileAPI.getStatus(userId);
//     dispatch(setStatus(response.data));
// };
// export const updateStatus = (status: string) => async (dispatch: any) => {
//     try {
//         const response = await ProfileAPI.updateStatus(status);
//         if (response.data.resultCode === 0) {
//             dispatch(setStatus(status));
//         }
//     } catch (error) {
//         //error handler
//     }
// };
// export const savePhoto = (file: any) => async (dispatch: any) => {
//     const response = await ProfileAPI.savePhoto(file);
//     if (response.data.resultCode === 0) {
//         dispatch(savePhotoSuccess(response.data.data.photos));
//     }
// };
// export const saveProfile = (profile: ProfileType) => async (
//   dispatch: any,
//   getState: any
// ) => {
//   const userId = getState().auth.userId;
//   const response = await ProfileAPI.saveProfile(profile);

//   if (response.data.resultCode === 0) {
//       dispatch(getUserProfile(userId));
//   } else {
//       dispatch(
//           stopSubmit('edit-profile', { _error: response.data.messages[0] })
//       );
//       // dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.messages[0]} }))
//       return Promise.reject(response.data.messages[0]);
//   }
// };

export default profileReducer;
