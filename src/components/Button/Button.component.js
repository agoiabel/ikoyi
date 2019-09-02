import React from 'react';
import styled from 'styled-components';
import { View, Image, ActivityIndicator } from 'react-native';


const BaseButton = ({ onPress, children, textColor, backgroundColor, image, ...props }) => {

    // I need to show loading status

    // I need to show inactive status

    let content = (
        <ContentContainer>
            <Text textColor={textColor}>
                {children}
            </Text>
        </ContentContainer>
    )

    if (props.loading) {
        content = (
            <ContentContainer>
                <ActivityIndicator size="small" color="white" />
            </ContentContainer>
        )
    }

    if (props.loading || props.disabled) {
        return (
            <ButtonContainer backgroundColor={backgroundColor}>
                {content}
            </ButtonContainer>
        );
    }

    return (
        <ButtonContainer onPress={onPress} backgroundColor={backgroundColor}>
            {content}
        </ButtonContainer>
    )
}

export const Primary = props => {
    return (
        <BaseButton {...props} textColor={'#1D262C'} backgroundColor={'#EEF1F4'} />
    )
}
export const Secondary = props => {

    let backgroundColor = 'rgb(231, 118, 24)';

    if (props.disabled) {
        backgroundColor = 'rgba(231, 118, 24, 0.5)';
    }

    return (
        <BaseButton {...props} textColor={'#FFFFFF'} backgroundColor={backgroundColor} />
    )
}
export const Tertiary = props => {
    return (
        <BaseButton {...props} textColor={'#FFFFFF'} backgroundColor={'#51549A'} />
    )
}


const ButtonContainer = styled.TouchableOpacity`
    border-radius: 6px;
    font-family: Helvetica;
    font-size: 14px;
    color: #1D262C;
    letter-spacing: 0;
    text-align: center;
    padding: 15px 15px;

    margin-bottom: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => props.backgroundColor};
`;
const ContentContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Text = styled.Text`
    font-size: 14px;
    letter-spacing: 0;
    margin-left: 5px;
    color: ${props => props.textColor};
`;


export default BaseButton;