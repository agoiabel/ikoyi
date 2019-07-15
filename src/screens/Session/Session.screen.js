import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import { ScrollView, StyleSheet } from 'react-native';

import Loading from '../../components/Loading';
import { getAll } from '../../shared/actions/Session.action';


class SessionScreen extends React.Component {

    componentWillMount() {
        this.props.getAll();
    }

    onPressHandler = screen => {
        this.props.navigation.navigate(screen)
    }

    render() {

        let container = (
            <Loading />
        );


        if (this.props.status == 200) {
            let news = this.props.news.map(newInfo => {
                return (
                    <Info key={newInfo.id}>
                        <NewImage source={require('../../images/new_1.jpeg')}></NewImage>

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

const Info = styled.View`
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


const NewImage = styled.Image`
    width: 100%;
    height: 200px;
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
        news: state.SessionReducer.news,
        status: state.SessionReducer.get_all_status,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAll: () => dispatch(getAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionScreen);