import { combineReducers } from 'redux';

import ClubReducer from './reducers/Club.reducer';
import VoteReducer from './reducers/Vote.reducer';
import AuthReducer from './reducers/Auth.reducer';
import AboutReducer from './reducers/About.reducer';
import AdvertReducer from './reducers/Advert.reducer';
import HealthReducer from './reducers/Health.reducer';
import SessionReducer from './reducers/Session.reducer';
import GalleryReducer from './reducers/Gallery.reducer';
import SecurityReducer from './reducers/Security.reducer';
import VoteListReducer from './reducers/VoteList.reducer';

export default combineReducers({
    VoteReducer: VoteReducer,
    ClubReducer: ClubReducer,
    AuthReducer: AuthReducer,
    AboutReducer: AboutReducer,
    AdvertReducer: AdvertReducer,
    HealthReducer: HealthReducer,
    SessionReducer: SessionReducer,
    GalleryReducer: GalleryReducer,
    SecurityReducer: SecurityReducer,
    VoteListReducer: VoteListReducer,
});