import { updateObject } from '../updateObject';
import { VOTE } from '../constants/Vote.constant';


const getAllWasSuccessFul = (state, action) => {
    return updateObject(state, {
        msg: action.payload.msg,
        votes: action.payload.data,
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
    votes: null,
    get_all_status: null
};


const reducer = (state = initialState, action) => {
    const VOTE_GET_ALL_SUCCESSFUL = VOTE.GET_ALL_SUCCESSFUL;
    const VOTE_GET_ALL_UNSUCCESSFUL = VOTE.GET_ALL_UNSUCCESSFUL;

    const lookup = {
        VOTE_GET_ALL_SUCCESSFUL: getAllWasSuccessFul,
        VOTE_GET_ALL_UNSUCCESSFUL: getAllWasUnSuccessFul
    }

    return lookup[action.type] ? lookup[action.type](state, action) : state;
}


export default reducer;