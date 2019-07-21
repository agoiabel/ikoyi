import { updateObject } from '../updateObject';
import { VOTE_LIST } from '../constants/VoteList.constant';


const getAllWasSuccessFul = (state, action) => {
    return updateObject(state, {
        msg: action.payload.msg,
        vote_lists: action.payload.data,
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
    vote_lists: null,
    get_all_status: null
};


const reducer = (state = initialState, action) => {
    const VOTE_LIST_GET_ALL_SUCCESSFUL = VOTE_LIST.GET_ALL_SUCCESSFUL;
    const VOTE_LIST_GET_ALL_UNSUCCESSFUL = VOTE_LIST.GET_ALL_UNSUCCESSFUL;

    const lookup = {
        VOTE_LIST_GET_ALL_SUCCESSFUL: getAllWasSuccessFul,
        VOTE_LIST_GET_ALL_UNSUCCESSFUL: getAllWasUnSuccessFul
    }

    return lookup[action.type] ? lookup[action.type](state, action) : state;
}


export default reducer;