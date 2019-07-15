import { SECURITY } from '../constants/Security.constant';

export const getAll = payload => ({
    type: SECURITY.GET_ALL,
    payload
});
export const getAllSuccessful = payload => ({
    type: SECURITY.GET_ALL_SUCCESSFUL,
    payload
});
export const getAllUnsuccessful = payload => ({
    type: SECURITY.GET_ALL_UNSUCCESSFUL,
    payload
});