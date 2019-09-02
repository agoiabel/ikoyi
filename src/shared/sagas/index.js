import { all } from 'redux-saga/effects';

import AuthSaga from './Auth.saga';
import ClubSaga from './Club.saga';
import VoteSaga from './Vote.saga';
import AboutSaga from './About.saga';
import PromoSaga from './Promo.saga';
import HealthSaga from './Health.saga';
import AdvertSaga from './Advert.saga';
import GallerySaga from './Gallery.saga';
import SessionSaga from './Session.saga';
import ClubNewsSaga from './ClubNews.saga';
import SecuritySaga from './Security.saga';
import VoteListSaga from './VoteList.saga';
import ClubGallerySaga from './ClubGallery.saga';


function* rootSaga() {
    yield all([
        AuthSaga(),
        VoteSaga(),
        ClubSaga(),
        AboutSaga(),
        PromoSaga(),
        AdvertSaga(),
        HealthSaga(),
        GallerySaga(),
        SessionSaga(),
        SecuritySaga(),
        VoteListSaga(),
        ClubNewsSaga(),
        ClubGallerySaga()
    ]);
}


export default rootSaga;