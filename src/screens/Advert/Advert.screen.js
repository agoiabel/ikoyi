import React from 'react';
import styled from 'styled-components';

class Advert extends React.Component {

    onPressHandler = () => {
        return this.props.navigation.navigate('Dashboard');
    }

    componentDidMount() {
        setTimeout(() => {
            this.onPressHandler();
        }, 3000);
    }

    render() {
        return (
            <Container source={require('../../images/advert.jpeg')}></Container>
        )
    }
}

const Container = styled.ImageBackground`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background: #F96060;
`;

export default Advert;