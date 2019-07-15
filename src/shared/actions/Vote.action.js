import { VOTE } from '../constants/Vote.constant';

export const getAll = payload => ({
    type: VOTE.GET_ALL,
    payload
});
export const getAllSuccessful = payload => ({
    type: VOTE.GET_ALL_SUCCESSFUL,
    payload
});
export const getAllUnsuccessful = payload => ({
    type: VOTE.GET_ALL_UNSUCCESSFUL,
    payload
});

