import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';

import Loading from '../../components/Loading';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { getAll } from '../../shared/actions/Health.action';

const Container = styled.View`
    flex: 1;
    width: 100%;
    margin: 0 auto;
`;
const Tip = styled.View`
    background: #FFFFFF;

    margin-bottom: 10px;

    border-width: 1;
    border-color: #ddd;

    display: flex;
    flex-direction: column;
    padding: 5px 5px;
`;
const TipImage = styled.View`
    width: 100%;
    margin-right: 10px;
`;
const View = styled.View`
    width: 100%;
    padding: 5px 5px;
`;
const Info = styled.View`
    display: flex;
`;
const Title = styled.Text`
    margin-top: 5px;
    font-size: 14px;
    margin-bottom: 5px;
`;
const Body = styled.Text`
    font-size: 12px;
    font-family: Helvetica;
    line-height: 12px;
    letter-spacing: 1.7;
`;

class HealthScreen extends React.Component {

    onPressHandler = screen => {
        this.props.navigation.navigate(screen)
    }

    render() {
        let health = this.props.navigation.getParam('health');

        return (
            <Container>
                <Header title={'Health Tips'} onPressHandler={() => this.onPressHandler('Dashboard')} />

                <ScrollView contentContainerStyle={styles.tips}>
                    <Tip key={health.id}>
                        <TipImage>
                            <Image source={{ uri: health.image }} resizeMode={'cover'} style={{ width: '100%', height: 150 }} />
                        </TipImage>
                        <View>
                            <Info>
                                <Title>{health.title}</Title>
                                <Body>
                                    {health.body}
                                </Body>
                            </Info>
                        </View>
                    </Tip>
                </ScrollView>
            </Container>
        )
    }
}


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


const mapStateToProps = state => {
    return {
        healths: state.HealthReducer.healths,
        status: state.HealthReducer.get_all_status,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAll: () => dispatch(getAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HealthScreen);