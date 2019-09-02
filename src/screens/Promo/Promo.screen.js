import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { Image, Linking, ScrollView } from 'react-native';
import { getAll } from '../../shared/actions/Promo.action';


const Container = styled.View`
    flex: 1;
    width: 100%;
    margin: 0 auto;
`;
const Promos = styled.View`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;


const Promo = styled.TouchableOpacity`
    width: 48%;
    background: #FFFFFF;
    margin-bottom: 15px;
`;
const View = styled.View`
    width: 100%;
    opacity: .5;
    background: #000000;
    padding: 5px 5px;
`;
const Title = styled.Text`
    color: #FFFFFF;
    font-size:16px;
    letter-spacing:1.6;
`;
const Content = styled.View`
    width: 90%;
    margin: 10px auto;
`;

class PromoScreen extends React.Component {

    onPressHandler = screen => {
        this.props.navigation.navigate(screen)
    }

    componentWillMount() {
        this.props.getAll();
    }

    render() {

        let container = (
            <Loading />
        );

        if (this.props.status == 200) {
            let promos = this.props.promos.map(promo => {
                return (
                    <Promo key={promo.id} onPress={() => Linking.openURL(promo.link)}>
                        <Image source={{ uri: promo.image }} resizeMode={'cover'} style={{ height: 200 }} />
                        <View>
                            <Title>{promo.title}</Title>
                        </View>
                    </Promo>
                )
            });

            container = (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Promos>
                        { promos }
                    </Promos>
                </ScrollView>
            )
        }

        return (
            <Container>
                <Header title={'Promo'} onPressHandler={() => this.onPressHandler('Dashboard')} />

                <Content>
                    {container}
                </Content>
            </Container>
        )
    }
}


const mapStateToProps = state => {
    return {
        promos: state.PromoReducer.promos,
        status: state.PromoReducer.get_all_status,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAll: () => dispatch(getAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PromoScreen);