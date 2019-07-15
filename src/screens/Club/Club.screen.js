import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

import { getAll } from '../../shared/actions/Club.action';


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


class ClubScreen extends React.Component {

    componentWillMount() {
        this.props.getAll();
    }

    onPressHandler = screen => {
        this.props.navigation.navigate(screen);
    }

    render() {

        let clubContainer = (
            <Loading />
        );

        if (this.props.status == 200) {
            let clubs = this.props.clubs.map(club => {
                return (
                    <Club key={club.id} backgroundColor={'#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}>
                        <Text>{club.club_name}</Text>
                    </Club>
                )
            });

            clubContainer = (
                <Clubs>
                    { clubs }
                </Clubs>
            )
        }

        return (
            <Container source={require('../../images/club.jpeg')}>
                <Header title={'Club'} onPressHandler={() => this.onPressHandler('Dashboard')} />

                { clubContainer }
            </Container>
        )
    }
}


const mapStateToProps = state => {
    return {
        clubs: state.ClubReducer.clubs,
        status: state.ClubReducer.get_all_status,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAll: () => dispatch(getAll())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ClubScreen);