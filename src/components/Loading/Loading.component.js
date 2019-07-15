import React from 'react';
import styled from 'styled-components';
import { ActivityIndicator } from 'react-native';

const Container = styled.View`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;


const Loading = props => (
    <Container>
        <ActivityIndicator size="large" color="rgb(249, 96, 96)" />
    </Container>
)


export default Loading;