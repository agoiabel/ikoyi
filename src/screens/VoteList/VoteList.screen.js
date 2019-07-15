import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';

import { ScrollView, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const styles = StyleSheet.create({
    tips: {
        width: '90%',
        marginTop: 30,
        marginBottom: 30,
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingBottom: 25,
    }
});



const Container = styled.View`
    flex: 1;
    width: 100%;
    margin: 0 auto;
`;
const Tip = styled.TouchableOpacity`
    background: #FFFFFF;

    padding: 15px 15px;
    margin-bottom: 10px;

    border-width: 1;
    border-radius: 3px;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: rgba(227,227,227,0.50);
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Text = styled.Text`
    letter-spacing: 0;
    font-size: 16px;
    font-family: Helvetica;

    margin-left: 10px;
`;



class VoteList extends React.Component {


    onPressHandler = screen => {
        this.props.navigation.navigate(screen)
    }

    render() {
        return (
            <Container>
                <Header title={'Vote'} onPressHandler={() => this.onPressHandler('Dashboard')} />

                <ScrollView contentContainerStyle={styles.tips}>
                    <Tip onPress={() => this.onPressHandler('Vote')}>
                        <AntDesign name={"questioncircle"} color="#F96060" size={15} />
                        <Text>
                            Buhari vote 1
                        </Text>
                    </Tip>
                    <Tip onPress={() => this.onPressHandler('Vote')}>
                        <AntDesign name={"questioncircle"} color="#F96060" size={15} />
                        <Text>
                            Buhari vote 2
                        </Text>
                    </Tip>
                    <Tip onPress={() => this.onPressHandler('Vote')}>
                        <AntDesign name={"questioncircle"} color="#F96060" size={15} />
                        <Text>
                            Buhari vote 3
                        </Text>
                    </Tip>
                    <Tip onPress={() => this.onPressHandler('Vote')}>
                        <AntDesign name={"questioncircle"} color="#F96060" size={15} />
                        <Text>
                            Buhari vote 4
                        </Text>
                    </Tip>
                    <Tip onPress={() => this.onPressHandler('Vote')}>
                        <AntDesign name={"questioncircle"} color="#F96060" size={15} />
                        <Text>
                            Buhari vote 5
                        </Text>
                    </Tip>
                    <Tip onPress={() => this.onPressHandler('Vote')}>
                        <AntDesign name={"questioncircle"} color="#F96060" size={15} />
                        <Text>
                            Buhari vote 6
                        </Text>
                    </Tip>
                </ScrollView>
            </Container>
        )
    }
}

export default VoteList;