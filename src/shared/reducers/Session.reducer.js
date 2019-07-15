import { updateObject } from '../updateObject';
import { SESSION } from '../constants/Session.constant';


const getAllWasSuccessFul = (state, action) => {
    return updateObject(state, {
        msg: action.payload.msg,
        news: action.payload.data,
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
    news: null,
    get_all_status: null
};


const reducer = (state = initialState, action) => {
    const SESSION_GET_ALL_SUCCESSFUL = SESSION.GET_ALL_SUCCESSFUL;
    const SESSION_GET_ALL_UNSUCCESSFUL = SESSION.GET_ALL_UNSUCCESSFUL;

    const lookup = {
        SESSION_GET_ALL_SUCCESSFUL: getAllWasSuccessFul,
        SESSION_GET_ALL_UNSUCCESSFUL: getAllWasUnSuccessFul
    }

    return lookup[action.type] ? lookup[action.type](state, action) : state;
}


export default reducer;