import { updateObject } from '../updateObject';
import { ADVERT } from '../constants/Advert.constant';


const getWasSuccessFul = (state, action) => {
    return updateObject(state, {
        msg: action.payload.msg,
        advert: action.payload.data,
        status: action.payload.status,
    });
}
const getWasUnSuccessFul = (state, action) => {
    return updateObject(state, {
        msg: action.payload.msg,
        status: action.payload.status,
    });
}


const initialState = {
    msg: null,
    advert: null,
    status: null
};


const reducer = (state = initialState, action) => {
    const ADVERT_GET_SUCCESSFUL = ADVERT.GET_SUCCESSFUL;
    const ADVERT_GET_UNSUCCESSFUL = ADVERT.GET_UNSUCCESSFUL;

    const lookup = {
        ADVERT_GET_SUCCESSFUL: getWasSuccessFul,
        ADVERT_GET_UNSUCCESSFUL: getWasUnSuccessFul
    }

    return lookup[action.type] ? lookup[action.type](state, action) : state;
}


export default reducer;