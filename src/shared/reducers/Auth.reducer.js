import { updateObject } from '../updateObject';
import { AUTH } from '../constants/Auth.constant';


const authWasSuccessFul = (state, action) => {
    return updateObject(state, {
        msg: action.payload.msg,
        user: action.payload.user,
        code: action.payload.code,
        status: action.payload.status,
    });
}
const authWasUnSuccessFul = (state, action) => {
    return updateObject(state, {
        msg: action.payload.msg,
        status: action.payload.status,
    });
}
const sampleSuccessful = (state, action) => {
    return updateObject(state, {
        sample_message: action.payload.msg,
        sample_status: action.payload.status,
    });
}


const initialState = {
    msg: null,
    user: null,
    code: null,
    status: null,

    sample_status: null,
    sample_message: null,
};


const reducer = (state = initialState, action) => {
    const AUTH_SUCCESSFUL = AUTH.SUCCESSFUL;
    const AUTH_UNSUCCESSFUL = AUTH.UNSUCCESSFUL;
    const AUTH_SAMPLE_SUCCESSFUL = AUTH.SAMPLE_SUCCESSFUL;

    const lookup = {
        AUTH_SUCCESSFUL: authWasSuccessFul,
        AUTH_UNSUCCESSFUL: authWasUnSuccessFul,
        AUTH_SAMPLE_SUCCESSFUL: sampleSuccessful
    }

    return lookup[action.type] ? lookup[action.type](state, action) : state;
}


export default reducer;