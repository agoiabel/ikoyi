import { get } from '../http_client';

export const getAll = async () => {
    const response = await get(`promo/mobileFetchPromo?user_id=1`);
    const data = await response.json();

    if (response.status !== 200) {
        throw new Error(data);
    }

    return data;
}