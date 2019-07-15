import { GALLERY } from '../constants/Gallery.constant';
import { getAll } from '../services/Gallery.service.js';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllSuccessful, getAllUnsuccessful } from '../actions/Gallery.action';

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
    yield takeEvery(GALLERY.GET_ALL, handleGetAll);
}

export default watch;