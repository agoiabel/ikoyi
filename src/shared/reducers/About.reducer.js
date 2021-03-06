import { updateObject } from '../updateObject';
import { ABOUT } from '../constants/About.constant';


const getAllWasSuccessFul = (state, action) => {

    return updateObject(state, {
        msg: action.payload.msg,
        status: action.payload.status,
        about: action.payload.data.about,
        past_admins: action.payload.data.current,
        current_admins: action.payload.data.past,
    });
}
const getAllWasUnSuccessFul = (state, action) => {
    return updateObject(state, {
        msg: action.payload.msg,
        status: action.payload.status,
    });
}


const initialState = {
    msg: null,
    status: null,

    about: null,
    past_admins: null,
    current_admins: null,
};


const reducer = (state = initialState, action) => {
    const ABOUT_GET_ALL_SUCCESSFUL = ABOUT.GET_ALL_SUCCESSFUL;
    const ABOUT_GET_ALL_UNSUCCESSFUL = ABOUT.GET_ALL_UNSUCCESSFUL;

    const lookup = {
        ABOUT_GET_ALL_SUCCESSFUL: getAllWasSuccessFul,
        ABOUT_GET_ALL_UNSUCCESSFUL: getAllWasUnSuccessFul
    }

    return lookup[action.type] ? lookup[action.type](state, action) : state;
}


export default reducer;