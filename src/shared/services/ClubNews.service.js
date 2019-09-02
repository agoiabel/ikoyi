import { get } from '../http_client';

export const getAll = async payload => {
    const response = await get(`club/mobileSingleClubNews?club_id=${payload.club_id}`);
    const data = await response.json();

    if (response.status !== 200) {
        throw new Error(data);
    }

    return data;
}