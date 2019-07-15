import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Club from '../screens/Club';
import Vote from '../screens/Vote';
import Login from '../screens/Login';
import Advert from '../screens/Advert';
import Health from '../screens/Health';
import Onboard from '../screens/Onboard';
import Gallery from '../screens/Gallery';
import Session from '../screens/Session';
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
            header: null //this will hide the header
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
            header: null //this will hide the header
        },
    },
    Advert: {
        screen: Advert,
        navigationOptions: {
            title: 'Advert',
            header: null //this will hide the header
        },
    },
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            title: 'Dashboard',
            header: null //this will hide the header
        },
    },
    Gallery: {
        screen: Gallery,
        navigationOptions: {
            title: 'Gallery',
            header: null //this will hide the header
        },
    },
    Session: {
        screen: Session,
        navigationOptions: {
            title: 'Session',
            header: null //this will hide the header
        },
    },
    Customer: {
        screen: Customer,
        navigationOptions: {
            title: 'Customer',
            header: null //this will hide the header
        },
    },
    VoteList: {
        screen: VoteList,
        navigationOptions: {
            title: 'VoteList',
            header: null //this will hide the header
        },
    },
    Vote: {
        screen: Vote,
        navigationOptions: {
            title: 'Vote',
            header: null //this will hide the header
        },
    },
    Health: {
        screen: Health,
        navigationOptions: {
            title: 'Health',
            header: null //this will hide the header
        },
    },
    Security: {
        screen: Security,
        navigationOptions: {
            title: 'Security',
            header: null //this will hide the header
        },
    },
    Club: {
        screen: Club,
        navigationOptions: {
            title: 'Club',
            header: null //this will hide the header
        },
    },
    Promotion: {
        screen: Promotion,
        navigationOptions: {
            title: 'Promotion',
            header: null //this will hide the header
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