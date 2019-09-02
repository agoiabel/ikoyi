import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-native';

class Onboard extends React.Component {

    onPressHandler = () => {
        return this.props.navigation.navigate('Login');
    }

    componentDidMount() {
        setTimeout(() => {
            this.onPressHandler();
        }, 1000);
    }

    render() {
        return (
            <Container>
                <Image source={require('../../images/logo.png')} />
            </Container>
        )
    }
}

const Container = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background: #E77618;
`;

export default Onboard;