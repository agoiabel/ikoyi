import { ADVERT } from '../constants/Advert.constant';
import { getAdvert } from '../services/Advert.service';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getSuccessful, getUnsuccessful } from '../actions/Advert.action';

function* handleGet(action) {
    try {
        const response = yield call(getAdvert, action.payload);
        if (response.status != 200) {
            yield put(getUnsuccessful(response));
        }

        yield put(getSuccessful(response));
    } catch (error) {
        if (typeof (error) !== 'object') {
            console.dir(error);
        }
    }
}

function* watch() {
    yield takeEvery(ADVERT.GET, handleGet);
}

export default watch;