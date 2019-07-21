import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import { Image, ScrollView, StyleSheet } from 'react-native';


class SessionSingle extends React.Component {

    onPressHandler = screen => {
        this.props.navigation.navigate(screen)
    }

    render() {
        let newInfo = this.props.navigation.getParam('newInfo');

        return (
            <Container>
                <Header title={'News'} onPressHandler={() => this.onPressHandler('Dashboard')} />

                <ScrollView contentContainerStyle={styles.infos}>
                    <Info>
                        <Image source={{ uri: newInfo.news_image }} style={{ width: '100%', height: 200 }} />

                        <NewContainer>
                            <NewTitle>
                                {newInfo.news_title}
                            </NewTitle>
                            <NewBody>
                                {newInfo.news_body}
                            </NewBody>
                        </NewContainer>
                    </Info>
                </ScrollView>
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
const NewContainer = styled.View`
    width: 90%;
    margin: 10px auto 0 auto;
`;
const NewTitle = styled.Text`
    font-size: 18px;
    color: #313131;
    letter-spacing: 1.6;
    margin-bottom: 50px;
    font-weight: bold;
`;
const NewBody = styled.Text``;



const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionSingle);