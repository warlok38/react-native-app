import axios from 'axios';
import { UserType } from '../types/types';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'fe172748-c255-405f-b8a1-31c00a80dfb3',
    },
});

export type ResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D;
    messages: Array<string>;
    resultCode: RC;
};

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodesForCaptcha {
    CaptchaIsRequired = 10,
}

export type GetItemsType = {
    items: Array<UserType>;
    totalCount: number;
    error: string | null;
};
