import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';

import Loading from '../../components/Loading';
import { ScrollView, StyleSheet } from 'react-native';
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
    flex-direction: row;
    padding: 5px 5px;
`;
const TipImage = styled.View`
    width: 30%;
    margin-right: 10px;
`;
const Image = styled.Image`
    width: 100%;
`;
const View = styled.View`
    width: 70%;
    padding: 5px 0;
`;
const Info = styled.View`
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
            let healths = this.props.healths.map(health => {
                return (
                    <Tip key={health.id}>
                        <TipImage>
                            <Image source={require('../../images/tip_01.png')} />
                        </TipImage>
                        <View>
                            <Info>
                                <Title>{health.title}</Title>
                                <Body>
                                    { health.body }
                                </Body>
                            </Info>
                        </View>
                    </Tip>
                )
            });

            container = (
                <ScrollView contentContainerStyle={styles.tips}>
                    {healths}
                </ScrollView>
            )
        }


        return (
            <Container>
                <Header title={'Health Tips'} onPressHandler={() => this.onPressHandler('Dashboard')} />
                { container }
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