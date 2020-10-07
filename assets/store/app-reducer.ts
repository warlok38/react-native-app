// import { getAuthUserData } from './auth-reducer';

// const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

// export type InitialStateType = {
//     initialized: boolean;
// };

// const initialState: InitialStateType = {
//     initialized: true,
// };

// const appReducer = (state = initialState, action: any) => {
//     switch (action.type) {
//         case INITIALIZED_SUCCESS: {
//             return {
//                 ...state,
//                 initialized: true,
//             };
//         }

//         default:
//             return state;
//     }
// };

// type InitializedSuccessActionType = {
//     type: typeof INITIALIZED_SUCCESS;
// };

// export const initializedSuccess = (): InitializedSuccessActionType => {
//     return {
//         type: INITIALIZED_SUCCESS,
//     };
// };

// export const initializeApp = () => (dispatch: any) => {
//     const promise = dispatch(getAuthUserData());

//     promise.then(() => {
//         dispatch(initializedSuccess());
//     });
// };

// export default appReducer;
