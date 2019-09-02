import { getAll } from '../services/ClubGallery.service';
import { call, put, takeEvery } from 'redux-saga/effects';
import { CLUB_GALLERY } from '../constants/ClubGallery.constant';
import { getAllSuccessful, getAllUnsuccessful } from '../actions/ClubGallery.action';

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
    yield takeEvery(CLUB_GALLERY.GET_ALL, handleGetAll);
}

export default watch;