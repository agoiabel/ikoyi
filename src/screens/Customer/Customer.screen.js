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
const Body = styled.Text``;
const AboutImage = styled.Image`
    margin: 30px 0;
    width: 100%;
    height: 200px;
`;

class About extends React.Component {

    send = () => {}

    onPressHandler = screen => {
        this.props.navigation.navigate(screen)
    }

    render() {
        return (
            <Container>
                <Header title={'About'} onPressHandler={() => this.onPressHandler('Dashboard')} />

                <Content>
                    <Title>
                        Club history
                    </Title>

                    <Body>
                        Lor em Ip sum Lo rem Ips um Lo rem Ip sum Lor em Ip sum Lor em Ip sum Lor em Ips um Lo rem Ip sum
                        Lor em Ip sum Lo rem Ips um Lo rem Ip sum Lor em Ip sum Lor em Ip sum Lor em Ips um Lo rem Ip sum
                        Lor em Ip sum Lo rem Ips um Lo rem Ip sum Lor em Ip sum Lor em Ip sum Lor em Ips um Lo rem Ip sum
                    </Body>

                    <AboutImage source={require('../../images/new_4.jpeg')} />

                    <Body>
                        Lor em Ip sum Lo rem Ips um Lo rem Ip sum Lor em Ip sum Lor em Ip sum Lor em Ips um Lo rem Ip sum
                        Lor em Ip sum Lo rem Ips um Lo rem Ip sum Lor em Ip sum Lor em Ip sum Lor em Ips um Lo rem Ip sum
                        Lor em Ip sum Lo rem Ips um Lo rem Ip sum Lor em Ip sum Lor em Ip sum Lor em Ips um Lo rem Ip sum
                    </Body>
                </Content>
            </Container>
        )
    }
}



export default About;