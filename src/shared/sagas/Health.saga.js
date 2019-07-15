import { getAll } from '../services/Health.service';
import { HEALTH } from '../constants/Health.constant';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllSuccessful, getAllUnsuccessful } from '../actions/Health.action';

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
    yield takeEvery(HEALTH.GET_ALL, handleGetAll);
}

export default watch;