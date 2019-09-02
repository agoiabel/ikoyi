import { updateObject } from '../updateObject';
import { CLUB_NEWS } from '../constants/ClubNews.constant';


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
    const CLUB_NEWS_GET_ALL_SUCCESSFUL = CLUB_NEWS.GET_ALL_SUCCESSFUL;
    const CLUB_NEWS_GET_ALL_UNSUCCESSFUL = CLUB_NEWS.GET_ALL_UNSUCCESSFUL;

    const lookup = {
        CLUB_NEWS_GET_ALL_SUCCESSFUL: getAllWasSuccessFul,
        CLUB_NEWS_GET_ALL_UNSUCCESSFUL: getAllWasUnSuccessFul
    }

    return lookup[action.type] ? lookup[action.type](state, action) : state;
}


export default reducer;