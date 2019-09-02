import { CLUB_NEWS } from '../constants/ClubNews.constant';

export const getAll = payload => ({
    type: CLUB_NEWS.GET_ALL,
    payload
});
export const getAllSuccessful = payload => ({
    type: CLUB_NEWS.GET_ALL_SUCCESSFUL,
    payload
});
export const getAllUnsuccessful = payload => ({
    type: CLUB_NEWS.GET_ALL_UNSUCCESSFUL,
    payload
});