import { updateObject } from '../updateObject';
import { GALLERY } from '../constants/Gallery.constant';


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
    const GALLERY_GET_ALL_SUCCESSFUL = GALLERY.GET_ALL_SUCCESSFUL;
    const GALLERY_GET_ALL_UNSUCCESSFUL = GALLERY.GET_ALL_UNSUCCESSFUL;

    const lookup = {
        GALLERY_GET_ALL_SUCCESSFUL: getAllWasSuccessFul,
        GALLERY_GET_ALL_UNSUCCESSFUL: getAllWasUnSuccessFul
    }

    return lookup[action.type] ? lookup[action.type](state, action) : state;
}


export default reducer;