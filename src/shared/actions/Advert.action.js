import { ADVERT } from '../constants/Advert.constant';

export const getAll = payload => ({
    type: ADVERT.GET,
    payload
});
export const getAllSuccessful = payload => ({
    type: ADVERT.GET_SUCCESSFUL,
    payload
});
export const getAllUnsuccessful = payload => ({
    type: ADVERT.GET_UNSUCCESSFUL,
    payload
});