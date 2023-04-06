import axios from 'axios';
import uniqId from 'uniqid';
// import { SET_NOTIFICATION } from '@/reducers/modules/notification.types';
const BASE_URL = process.env.REACT_APP_API_ENDPOINT || '';

const axiosInterceptor = axios.create({
    baseURL: BASE_URL,
    timeout: 60000,
    withCredentials: false,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
});

export const passStoreToInterceptor = (store: any) => {
    axiosInterceptor.interceptors.response.use(
        function (response) {
            /*
                http status가 200인 경우
            */
            if (response.config.method !== 'get' && response.config.headers?.usetoast) {
                const tempId = uniqId();
                // store.dispatch({
                //     type: SET_NOTIFICATION,
                //     payload: {
                //         id: tempId,
                //         contents:
                //             response.config.headers?.usetoast === 'default'
                //                 ? `Your server request(${response.config.method}) was succeed.`
                //                 : response.config.headers.usetoast,
                //         type: 'success',
                //     },
                // });
            }
            return response;
        },

        function (error) {
            /*
                http status가 200이 아닌 경우
            */
            const tempId = uniqId();
            if (error?.response?.status === 424) {
                // related server dependencies
                // 1. vasp error case
            } else {
                // store.dispatch({
                //     type: SET_NOTIFICATION,
                //     payload: {
                //         id: tempId,
                //         contents: error?.message || '-',
                //         type: 'error',
                //     },
                // });
            }

            return Promise.reject(error);
        },
    );
};

export default axiosInterceptor;

export const setAxiosHeaders = (headers: any) => {
    const { Authorization, ...rest } = headers;
    axiosInterceptor.defaults.headers.common.Authorization = Authorization;
};

export const resetAxiosHeaders = () => {
    delete axiosInterceptor.defaults.headers.common.Authorization;
};
