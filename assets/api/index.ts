import axios from 'axios';
import { UserType } from '../types/types';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a09625f4-a81c-4b9e-a0f8-4e1c034d7ed5',
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
