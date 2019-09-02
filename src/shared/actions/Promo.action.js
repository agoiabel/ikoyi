import { PROMO } from '../constants/Promo.constant';

export const getAll = payload => ({
    type: PROMO.GET_ALL,
    payload
});
export const getAllSuccessful = payload => ({
    type: PROMO.GET_ALL_SUCCESSFUL,
    payload
});
export const getAllUnsuccessful = payload => ({
    type: PROMO.GET_ALL_UNSUCCESSFUL,
    payload
});