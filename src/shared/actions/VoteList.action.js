import { VOTE_LIST } from '../constants/VoteList.constant';

export const getAll = payload => ({
    type: VOTE_LIST.GET_ALL,
    payload
});
export const getAllSuccessful = payload => ({
    type: VOTE_LIST.GET_ALL_SUCCESSFUL,
    payload
});
export const getAllUnsuccessful = payload => ({
    type: VOTE_LIST.GET_ALL_UNSUCCESSFUL,
    payload
});