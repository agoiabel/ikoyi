import { get } from '../http_client';

export const getAll = async () => {
    const response = await get(`news/mobilenewsview?page=1&limit=50`);
    const data = await response.json();

    if (response.status !== 200) {
        throw new Error(data);
    }

    return data;
}