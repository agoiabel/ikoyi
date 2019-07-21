import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Advert from '../screens/Advert';
import Onboard from '../screens/Onboard';

import Club from '../screens/Club';
import ClubSingle from '../screens/ClubSingle';

import Health from '../screens/Health';
import HealthSingle from '../screens/HealthSingle';

import Gallery from '../screens/Gallery';
import GallerySingle from '../screens/GallerySingle';

import Session from '../screens/Session';
import SessionSingle from '../screens/SessionSingle';

import Vote from '../screens/Vote';
import VoteList from '../screens/VoteList';

import Security from '../screens/Security';

import Customer from '../screens/Customer';
import Promotion from '../screens/Promotion';
import Dashboard from '../screens/Dashboard';

const RootStack = createSwitchNavigator({
    Onboard: {
        screen: Onboard,
        navigationOptions: {
            title: 'Onboard',
            header: null
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
            header: null
        },
    },
    Advert: {
        screen: Advert,
        navigationOptions: {
            title: 'Advert',
            header: null
        },
    },
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            title: 'Dashboard',
            header: null
        },
    },
    Gallery: {
        screen: Gallery,
        navigationOptions: {
            title: 'Gallery',
            header: null
        },
    },
    GallerySingle: {
        screen: GallerySingle,
        navigationOptions: {
            title: 'GallerySingle',
            header: null
        },
    },
    Session: {
        screen: Session,
        navigationOptions: {
            title: 'Session',
            header: null
        },
    },
    SessionSingle: {
        screen: SessionSingle,
        navigationOptions: {
            title: 'SessionSingle',
            header: null
        },
    },
    VoteList: {
        screen: VoteList,
        navigationOptions: {
            title: 'VoteList',
            header: null
        },
    },
    Vote: {
        screen: Vote,
        navigationOptions: {
            title: 'Vote',
            header: null
        },
    },
    Health: {
        screen: Health,
        navigationOptions: {
            title: 'Health',
            header: null
        },
    },
    HealthSingle: {
        screen: HealthSingle,
        navigationOptions: {
            title: 'HealthSingle',
            header: null
        },
    },
    Club: {
        screen: Club,
        navigationOptions: {
            title: 'Club',
            header: null
        },
    },
    ClubSingle: {
        screen: ClubSingle,
        navigationOptions: {
            title: 'ClubSingle',
            header: null
        },
    },
    Security: {
        screen: Security,
        navigationOptions: {
            title: 'Security',
            header: null
        },
    },
    Promotion: {
        screen: Promotion,
        navigationOptions: {
            title: 'Promotion',
            header: null
        },
    },
    Customer: {
        screen: Customer,
        navigationOptions: {
            title: 'Customer',
            header: null
        },
    },
}, {
        transitionConfig: () => ({
            transitionSpec: {
                duration: 0,
            },
        }),
});

const Route = createAppContainer(RootStack);

export default Route;