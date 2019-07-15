import { getAll } from '../services/Vote.service';
import { VOTE } from '../constants/Vote.constant';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllSuccessful, getAllUnsuccessful } from '../actions/Vote.action';

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
    yield takeEvery(VOTE.GET_ALL, handleGetAll);
}

export default watch;