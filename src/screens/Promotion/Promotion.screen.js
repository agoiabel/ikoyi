import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';

import Input from '../../components/Input';
import { Secondary } from '../../components/Button/Button.component';


const Container = styled.View`
    flex: 1;
    width: 100%;
    margin: 0 auto;
`;
const Content = styled.View`
    width: 90%;
    margin: 0 auto;
`;
const Title = styled.Text`
    text-align: center;
    font-size: 20px;
    margin: 30px 0;
`;

class Promotion extends React.Component {

    send = () => {}

    onPressHandler = screen => {
        this.props.navigation.navigate(screen)
    }

    render() {
        return (
            <Container>
                <Header title={'Promo'} onPressHandler={() => this.onPressHandler('Dashboard')} />

                <Content>
                    <Title>
                        No promos yet
                    </Title>
                </Content>
            </Container>
        )
    }
}



export default Promotion;