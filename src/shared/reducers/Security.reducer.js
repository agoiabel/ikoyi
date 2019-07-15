import { updateObject } from '../updateObject';
import { SECURITY } from '../constants/Security.constant';


const getAllWasSuccessFul = (state, action) => {
    return updateObject(state, {
        msg: action.payload.msg,
        securities: action.payload.data,
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
    securities: null,
    get_all_status: null
};


const reducer = (state = initialState, action) => {
    const SECURITY_GET_ALL_SUCCESSFUL = SECURITY.GET_ALL_SUCCESSFUL;
    const SECURITY_GET_ALL_UNSUCCESSFUL = SECURITY.GET_ALL_UNSUCCESSFUL;

    const lookup = {
        SECURITY_GET_ALL_SUCCESSFUL: getAllWasSuccessFul,
        SECURITY_GET_ALL_UNSUCCESSFUL: getAllWasUnSuccessFul
    }

    return lookup[action.type] ? lookup[action.type](state, action) : state;
}


export default reducer;