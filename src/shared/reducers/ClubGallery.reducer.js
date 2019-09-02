import { updateObject } from '../updateObject';
import { CLUB_GALLERY } from '../constants/ClubGallery.constant';


const getAllWasSuccessFul = (state, action) => {
    return updateObject(state, {
        msg: action.payload.msg,
        gallaries: action.payload.data,
        get_all_status: action.payload.status,
    });
}
const getAllWasUnSuccessFul = (state, action) => {
    return updateObject(state, {
        msg: action.payload.msg,
        get_all_status: action.payload.status,
    });
}


const initialState = {
    msg: null,
    gallaries: null,
    get_all_status: null
};


const reducer = (state = initialState, action) => {
    const CLUB_GALLERY_GET_ALL_SUCCESSFUL = CLUB_GALLERY.GET_ALL_SUCCESSFUL;
    const CLUB_GALLERY_GET_ALL_UNSUCCESSFUL = CLUB_GALLERY.GET_ALL_UNSUCCESSFUL;

    const lookup = {
        CLUB_GALLERY_GET_ALL_SUCCESSFUL: getAllWasSuccessFul,
        CLUB_GALLERY_GET_ALL_UNSUCCESSFUL: getAllWasUnSuccessFul
    }

    return lookup[action.type] ? lookup[action.type](state, action) : state;
}


export default reducer;