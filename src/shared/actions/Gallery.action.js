import { GALLERY } from '../constants/Gallery.constant';

export const getAll = payload => ({
    type: GALLERY.GET_ALL,
    payload
});
export const getAllSuccessful = payload => ({
    type: GALLERY.GET_ALL_SUCCESSFUL,
    payload
});
export const getAllUnsuccessful = payload => ({
    type: GALLERY.GET_ALL_UNSUCCESSFUL,
    payload
});