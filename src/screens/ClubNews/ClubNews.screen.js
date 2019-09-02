import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import { Image, ScrollView, StyleSheet } from 'react-native';

import Loading from '../../components/Loading';
import { getAll } from '../../shared/actions/ClubNews.action';


class ClubNewsScreen extends React.Component {

    componentDidMount() {
        this.props.getAll({
            club_id: this.props.navigation.getParam('club_id')
        });
        console.dir(this.props.navigation.getParam('club_id'));
    }

    onPressHandler = screen => {
        this.props.navigation.navigate(screen);
    }

    // navigateSinglePage = newInfo => {
    //     this.props.navigation.navigate('SessionSingle', {
    //         newInfo: newInfo
    //     });
    // }

    render() {

        let container = (
            <Loading />
        );


        if (this.props.status == 200) {
            let news = this.props.news.map(newInfo => {
                return (
                    <Info key={newInfo.id} onPress={() => true}>
                        <Image source={{uri: newInfo.news_image}} style={{ width: '100%', height: 200}}/>

                        <NewContainer>
                            <NewTitle>
                                {newInfo.news_title}
                            </NewTitle>
                        </NewContainer>
                    </Info>
                )
            });

            container = (
                <ScrollView contentContainerStyle={styles.infos}>
                    { news }
                </ScrollView>
            )
        }

        return (
            <Container>
                <Header title={'News'} onPressHandler={() => this.onPressHandler('Dashboard')} />

                { container }
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    infos: {
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

const Info = styled.TouchableOpacity`
    margin-bottom: 15px;

    background: #FFFFFF;

    border-width: 1;
    border-radius: 2;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: rgba(227,227,227,0.50);
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 1;

    padding-bottom: 15px;
`;
const NewContainer = styled.View`
    width: 90%;
    margin: 10px auto 0 auto;
`;
const NewTitle = styled.Text`
    font-size: 16px;
    color: #313131;
    letter-spacing: 1.6;
`;



const mapStateToProps = state => {
    return {
        news: state.ClubNewsReducer.news,
        status: state.ClubNewsReducer.get_all_status,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAll: () => dispatch(getAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubNewsScreen);