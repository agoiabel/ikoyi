import { CLUB } from '../constants/Club.constant';

export const getAll = payload => ({
    type: CLUB.GET_ALL,
    payload
});
export const getAllSuccessful = payload => ({
    type: CLUB.GET_ALL_SUCCESSFUL,
    payload
});
export const getAllUnsuccessful = payload => ({
    type: CLUB.GET_ALL_UNSUCCESSFUL,
    payload
});