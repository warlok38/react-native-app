import { instance } from './';

type GetCaptchaUrlResponsetype = {
    url: string;
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance
            .get<GetCaptchaUrlResponsetype>(`security/get-captcha-url`)
            .then((res) => res.data);
    },
};
