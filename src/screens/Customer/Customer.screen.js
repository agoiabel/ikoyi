import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import { Image, ScrollView, StyleSheet } from 'react-native';
import Loading from '../../components/Loading';
import { getAll } from '../../shared/actions/About.action';


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
const Content = styled.View`
    width: 90%;
    margin: 0 auto;
`;
const Title = styled.Text`
    text-align: center;
    font-size: 20px;
    margin: 30px 0;
`;
const Body = styled.Text``;

class About extends React.Component {

    componentWillMount() {
        this.props.getAll();
    }

    onPressHandler = screen => {
        this.props.navigation.navigate(screen);
    }

    render() {
        let container = (
            <Loading />
        );

        if (this.props.status == 200) {
            let about = this.props.about;

            container = (
                <ScrollView contentContainerStyle={styles.tips}>
                    <Content>
                        <Title>
                            { about.title }
                        </Title>
                        <Image source={{ uri: about.image }} resizeMode={'cover'} style={{ width: '100%', height: 200, marginTop: 30, marginBottom: 30 }} />
                        <Body>
                            { about.body }
                        </Body>
                    </Content>
                </ScrollView>
            )
        }

        return (
            <Container>
                <Header title={'About'} onPressHandler={() => this.onPressHandler('Dashboard')} />

                { container }
            </Container>
        )
    }
}



const mapStateToProps = state => {
    return {
        about: state.AboutReducer.about,
        status: state.AboutReducer.get_all_status,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAll: () => dispatch(getAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);