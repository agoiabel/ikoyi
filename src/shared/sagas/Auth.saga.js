import { AUTH } from '../constants/Auth.constant';
import { call, put, takeEvery } from 'redux-saga/effects';
import { authStart, sampleStart } from '../services/Auth.service';
import { authSuccessful, authUnsuccessful } from '../actions/Auth.action';

function* handleAuthStart(action) {
    try {
        const response = yield call(authStart, action.payload);
        if (response.status != 200) {
            yield put(authUnsuccessful(response));
        }

        yield put(authSuccessful(response));
    } catch (error) {
        if (typeof (error) !== 'object') {
            // console.dir(error);
        }
    }
}

function* handleSampleStart(action) {
    try {
        const response = yield call(sampleStart, action.payload);

        console.dir(response);

        if (response.status != 200) {
            yield put(sampleSuccessful(response));
        }

        yield put(sampleSuccessful(response.field[0]));
    } catch (error) {
        if (typeof (error) !== 'object') {
            // console.dir(error);
        }
    }
}

function* watch() {
    yield takeEvery(AUTH.START, handleAuthStart);
    yield takeEvery(AUTH.SAMPLE_START, handleSampleStart);
}

export default watch;