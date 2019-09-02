import { ADVERT } from '../constants/Advert.constant';

export const getAll = payload => ({
    type: ADVERT.GET,
    payload
});
export const getSuccessful = payload => ({
    type: ADVERT.GET_SUCCESSFUL,
    payload
});
export const getUnsuccessful = payload => ({
    type: ADVERT.GET_UNSUCCESSFUL,
    payload
});