import { updateObject } from '../updateObject';
import { CLUB } from '../constants/Club.constant';


const getAllWasSuccessFul = (state, action) => {
    return updateObject(state, {
        msg: action.payload.msg,
        clubs: action.payload.data,
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
    clubs: null,
    get_all_status: null
};


const reducer = (state = initialState, action) => {
    const CLUB_GET_ALL_SUCCESSFUL = CLUB.GET_ALL_SUCCESSFUL;
    const CLUB_GET_ALL_UNSUCCESSFUL = CLUB.GET_ALL_UNSUCCESSFUL;

    const lookup = {
        CLUB_GET_ALL_SUCCESSFUL: getAllWasSuccessFul,
        CLUB_GET_ALL_UNSUCCESSFUL: getAllWasUnSuccessFul
    }

    return lookup[action.type] ? lookup[action.type](state, action) : state;
}


export default reducer;