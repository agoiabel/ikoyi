import { post } from '../http_client';
// import { setStorage } from '../utils/storage';

export const authStart = async payload => {
    const response = await post(payload, 'auth/login');
    const data = await response.json();

    if (response.status !== 200) {
        throw new Error(data);
    }

    return data;
}