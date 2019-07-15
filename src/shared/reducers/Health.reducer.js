import { updateObject } from '../updateObject';
import { HEALTH } from '../constants/Health.constant';


const getAllWasSuccessFul = (state, action) => {
    return updateObject(state, {
        msg: action.payload.msg,
        healths: action.payload.data,
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
    healths: null,
    get_all_status: null
};


const reducer = (state = initialState, action) => {
    const HEALTH_GET_ALL_SUCCESSFUL = HEALTH.GET_ALL_SUCCESSFUL;
    const HEALTH_GET_ALL_UNSUCCESSFUL = HEALTH.GET_ALL_UNSUCCESSFUL;

    const lookup = {
        HEALTH_GET_ALL_SUCCESSFUL: getAllWasSuccessFul,
        HEALTH_GET_ALL_UNSUCCESSFUL: getAllWasUnSuccessFul
    }

    return lookup[action.type] ? lookup[action.type](state, action) : state;
}


export default reducer;