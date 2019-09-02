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
const Club = styled.TouchableOpacity`
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

    state = {
        clubs: [
            {
                id: 1,
                link: '',
                // link: 'ClubExco',
                title: 'Club Excos'
            },
            {
                id: 2,
                link: '',
                link: 'ClubNews',
                title: 'Club News'
            },
            {
                id: 3,
                link: 'ClubGallery',
                title: 'Club Galleries'
            },
        ]
    }

    onPressHandler = club => {
        return this.props.navigation.navigate(club.link, {
            club_id: club.id
        });
    }

    render() {
        let club = this.props.navigation.getParam('club');

        let clubs = this.state.clubs.map(club => {
            let backgroundColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);

            return (
                <Club key={club.id} backgroundColor={backgroundColor} onPress={() => this.onPressHandler(club)}>
                    <Text>{club.title}</Text>
                </Club>
            )
        });

        return (
            <Container source={{ uri: club.club_image }}>
                <Header title={club.club_name} onPressHandler={() => this.onPressHandler('Dashboard')} />
                <Clubs>
                    <Club key={club.id} backgroundColor={'#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)} onPress={() => true}>
                        <Text>{club.club_name}</Text>
                        <Text>{club.members}</Text>
                    </Club>

                    { clubs }
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