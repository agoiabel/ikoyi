import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({ title, onPressHandler }) => (
    <Container>
        <View>
            <TouchableOpacity onPress={onPressHandler}>
                <Ionicons name={"ios-arrow-round-back"} color="#FFFFFF" size={30} />
            </TouchableOpacity>
            <Text opacity={'1'}>{title}</Text>
            <Text opacity={'0'}>{title}</Text>
        </View>
    </Container>
);


const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;

    background: #E77618;
    padding: 45px 0 15px 0;
`;
const View = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    margin: 0 auto;
`;
const Text = styled.Text`
	font-size: 16px;
    color: #FFFFFF;

    position: absolute;
    left: 40%;

    opacity: ${props => props.opacity}
`;


export default Header;

