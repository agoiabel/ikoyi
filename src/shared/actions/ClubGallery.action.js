import { CLUB_GALLERY } from '../constants/ClubGallery.constant';

export const getAll = payload => ({
    type: CLUB_GALLERY.GET_ALL,
    payload
});
export const getAllSuccessful = payload => ({
    type: CLUB_GALLERY.GET_ALL_SUCCESSFUL,
    payload
});
export const getAllUnsuccessful = payload => ({
    type: CLUB_GALLERY.GET_ALL_UNSUCCESSFUL,
    payload
});