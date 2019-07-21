import { ABOUT } from '../constants/About.constant';

export const getAll = payload => ({
    type: ABOUT.GET_ALL,
    payload
});
export const getAllSuccessful = payload => ({
    type: ABOUT.GET_ALL_SUCCESSFUL,
    payload
});
export const getAllUnsuccessful = payload => ({
    type: ABOUT.GET_ALL_UNSUCCESSFUL,
    payload
});