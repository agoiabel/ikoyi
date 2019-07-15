import { SESSION } from '../constants/Session.constant';

export const getAll = payload => ({
    type: SESSION.GET_ALL,
    payload
});
export const getAllSuccessful = payload => ({
    type: SESSION.GET_ALL_SUCCESSFUL,
    payload
});
export const getAllUnsuccessful = payload => ({
    type: SESSION.GET_ALL_UNSUCCESSFUL,
    payload
});