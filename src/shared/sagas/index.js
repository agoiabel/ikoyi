import { all } from 'redux-saga/effects';

import AuthSaga from './Auth.saga';
import ClubSaga from './Club.saga';
import VoteSaga from './Vote.saga';
import HealthSaga from './Health.saga';
import SessionSaga from './Session.saga';
import GallerySaga from './Gallery.saga';
import SecuritySaga from './Security.saga';


function* rootSaga() {
    yield all([
        AuthSaga(),
        VoteSaga(),
        ClubSaga(),
        HealthSaga(),
        GallerySaga(),
        SessionSaga(),
        SecuritySaga(),
    ]);
}


export default rootSaga;