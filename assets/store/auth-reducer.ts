import { ResultCodesEnum, ResultCodesForCaptcha } from '../api';
import { FormAction, stopSubmit } from 'redux-form';
import { authAPI } from '../api/auth-api';
import { securityAPI } from '../api/security-api';
import { BaseThunkType, InferActionsTypes } from './redux-store';

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;

let initialState = {
    userId: null as number | null, //TODO мой id 16492 второй акк. пофиксится, когда сделаю login
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
    isFetching: false,
};

const authReducer = (
    state = initialState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case 'SN/auth/SET_USER_DATA':
        case 'SN/auth/GET_CAPTCHA_URL_SUCCESS': {
            return {
                ...state,
                ...action.payload,
            };
        }
        case 'SN/USERS/TOGGLE_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching };
        }
        default:
            return state;
    }
};

export const actions = {
    setAuthUserData: (
        userId: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean
    ) =>
        ({
            type: 'SN/auth/SET_USER_DATA',
            payload: { userId, email, login, isAuth },
        } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) =>
        ({
            type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS',
            payload: { captchaUrl },
        } as const),
    toggleIsFetching: (isFetching: boolean) => {
        return {
            type: 'SN/USERS/TOGGLE_IS_FETCHING',
            isFetching,
        } as const;
    },
};

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const meData = await authAPI.me();
    if (meData.resultCode === ResultCodesEnum.Success) {
        const { id, email, login } = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
};

export const login = (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData());
    } else {
        if (data.resultCode === ResultCodesForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
        const message =
            data.messages.length > 0 ? data.messages[0] : 'Something was wrong';
        dispatch(
            stopSubmit('login', {
                _error: message,
            })
        );
    }
    dispatch(actions.toggleIsFetching(false));
};
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export const logout = (): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
    dispatch(actions.toggleIsFetching(false));
};

export default authReducer;
