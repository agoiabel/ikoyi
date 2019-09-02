import { updateObject } from '../updateObject';
import { PROMO } from '../constants/Promo.constant';


const getAllWasSuccessFul = (state, action) => {
    return updateObject(state, {
        msg: action.payload.msg,
        promos: action.payload.data,
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
    promos: null,
    get_all_status: null
};


const reducer = (state = initialState, action) => {
    const PROMO_GET_ALL_SUCCESSFUL = PROMO.GET_ALL_SUCCESSFUL;
    const PROMO_GET_ALL_UNSUCCESSFUL = PROMO.GET_ALL_UNSUCCESSFUL;

    const lookup = {
        PROMO_GET_ALL_SUCCESSFUL: getAllWasSuccessFul,
        PROMO_GET_ALL_UNSUCCESSFUL: getAllWasUnSuccessFul
    }

    return lookup[action.type] ? lookup[action.type](state, action) : state;
}


export default reducer;