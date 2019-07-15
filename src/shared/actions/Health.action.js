import { HEALTH } from '../constants/Health.constant';

export const getAll = payload => ({
    type: HEALTH.GET_ALL,
    payload
});
export const getAllSuccessful = payload => ({
    type: HEALTH.GET_ALL_SUCCESSFUL,
    payload
});
export const getAllUnsuccessful = payload => ({
    type: HEALTH.GET_ALL_UNSUCCESSFUL,
    payload
});