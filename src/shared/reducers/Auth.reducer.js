import { updateObject } from '../updateObject';
import { AUTH } from '../constants/Auth.constant';


const authWasSuccessFul = (state, action) => {
    return updateObject(state, {
        user: action.payload.user,
        code: action.payload.code,
        status: action.payload.status,
        msg: `action.payload.msg ${new Date()}`,
    });
}
const authWasUnSuccessFul = (state, action) => {
    return updateObject(state, {
        status: action.payload.status,
        msg: `action.payload.msg ${new Date()}`,
    });
}


const initialState = {
    msg: null,
    user: null,
    code: null,
    status: null,
};


const reducer = (state = initialState, action) => {
    const lookup = {
        [AUTH.SUCCESSFUL]: authWasSuccessFul,
        [AUTH.UNSUCCESSFUL]: authWasUnSuccessFul,
    }

    return lookup[action.type] ? lookup[action.type](state, action) : state;
}


export default reducer;