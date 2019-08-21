import { all } from 'redux-saga/effects';

import AuthSaga from './Auth.saga';
import ClubSaga from './Club.saga';
import VoteSaga from './Vote.saga';
import AboutSaga from './About.saga';
import HealthSaga from './Health.saga';
import AdvertSaga from './Advert.saga';
import SessionSaga from './Session.saga';
import GallerySaga from './Gallery.saga';
import SecuritySaga from './Security.saga';
import VoteListSaga from './VoteList.saga';


function* rootSaga() {
    yield all([
        AuthSaga(),
        VoteSaga(),
        ClubSaga(),
        AboutSaga(),
        AdvertSaga(),
        HealthSaga(),
        GallerySaga(),
        SessionSaga(),
        SecuritySaga(),
        VoteListSaga(),
    ]);
}


export default rootSaga;