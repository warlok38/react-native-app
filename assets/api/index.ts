// import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// const instance: AxiosInstance = axios.create({
//     withCredentials: true,
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     headers: {
//         'API-KEY': 'fe172748-c255-405f-b8a1-31c00a80dfb3',
//     },
// } as AxiosRequestConfig);

// export const usersAPI = {
//     getUsers(currentPage: number, pageSize: number) {
//         return instance
//             .get(`users?page=${currentPage}&count=${pageSize}`, {
//                 withCredentials: true,
//             })
//             .then((response: any) => {
//                 return response.data;
//             });
//     },
//     follow(userId: number) {
//         return instance.post(`follow/${userId}`);
//     },
//     unfollow(userId: number) {
//         return instance.delete(`follow/${userId}`);
//     },
//     getProfile(userId: number) {
//         return ProfileAPI.getProfile(userId);
//     },
// };

// export const ProfileAPI = {
//     getProfile(userId: number) {
//         console.log(userId, 'id');
//         return instance.get(`profile/` + userId);
//     },
//     getStatus(userId: number) {
//         return instance.get(`profile/status/` + userId);
//     },
//     updateStatus(status: string) {
//         return instance.put(`profile/status`, { status: status });
//     },
//     savePhoto(photoFile: any) {
//         const formData = new FormData();
//         formData.append('image', photoFile);
//         return instance.put(`profile/photo`, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         });
//     },
//     saveProfile(profile: any) {
//         return instance.put(`profile`, profile);
//     },
// };

// export const authAPI = {
//     me() {
//         return instance.get(`auth/me`);
//     },
//     login(
//         email: string,
//         password: string,
//         rememberMe = false,
//         captcha?: string | null
//     ) {
//         return instance.post(`auth/login`, {
//             email,
//             password,
//             rememberMe,
//             captcha,
//         });
//     },
//     logout() {
//         return instance.delete(`auth/login`);
//     },
// };

// export const securityAPI = {
//     getCaptchaUrl() {
//         return instance.get(`security/get-captcha-url`);
//     },
// };
