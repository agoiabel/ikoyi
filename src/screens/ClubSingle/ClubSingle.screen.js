import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';


const Container = styled.ImageBackground`
    flex: 1;
    width: 100%;
    margin: 0 auto;
`;
const Clubs = styled.View`
    width: 90%;
    margin: 30px auto;
`;
const Club = styled.View`
    background: ${props => props.backgroundColor};
    border-radius: 5px;
    letter-spacing: 0;

    justify-content: center;
    align-items: center;
    padding: 15px 15px;

    margin-bottom: 15px;
`;
const View = styled.View``;
const Text = styled.Text`
    letter-spacing: 0;
    color: #FFFFFF;
    font-size: 12px;
    font-family: Helvetica;

    text-align: center;
`;


class ClubSingleScreen extends React.Component {

    onPressHandler = screen => {
        this.props.navigation.navigate(screen);
    }

    render() {
        let club = this.props.navigation.getParam('club');

        return (
            <Container source={require('../../images/club.jpeg')}>
                <Header title={'Club'} onPressHandler={() => this.onPressHandler('Dashboard')} />
                <Clubs>
                    <Club key={club.id} backgroundColor={'#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}>
                        <Text>{club.club_name}</Text>
                        <Text>{club.members} member(s)</Text>
                    </Club>
                </Clubs>
            </Container>
        )
    }
}


const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(ClubSingleScreen);