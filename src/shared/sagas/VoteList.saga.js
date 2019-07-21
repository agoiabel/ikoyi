import { getAll } from '../services/VoteList.service';
import { call, put, takeEvery } from 'redux-saga/effects';
import { VOTE_LIST } from '../constants/VoteList.constant';
import { getAllSuccessful, getAllUnsuccessful } from '../actions/VoteList.action';

function* handleGetAll(action) {
    try {
        const response = yield call(getAll, action.payload);
        if (response.status != 200) {
            yield put(getAllUnsuccessful(response));
        }

        yield put(getAllSuccessful(response));
    } catch (error) {
        if (typeof (error) !== 'object') {
            console.dir(error);
        }
    }
}

function* watch() {
    yield takeEvery(VOTE_LIST.GET_ALL, handleGetAll);
}

export default watch;