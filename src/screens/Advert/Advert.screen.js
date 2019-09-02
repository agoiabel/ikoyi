import React from 'react';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Loading from '../../components/Loading';
import { getAll } from '../../shared/actions/Advert.action';

class Advert extends React.Component {

    onPressHandler = () => {
        return this.props.navigation.navigate('Dashboard');
    }

    componentDidMount() {
        this.props.getAll();
    }

    render() {
        let container = (
            <Loading />
        );

        if (this.props.status == 200) {
            let advert = this.props.advert;

            container = (
                <Container source={{ uri: advert.image }} resizeMode={'cover'}>
                    <Icon onPress={this.onPressHandler}>
                        <Ionicons name={'ios-close'} color={'#FFFFFF'} size={30} />
                    </Icon>
                </Container>
            )
        }

        return (
            <React.Fragment>
                { container }
            </React.Fragment>
        )
    }
}

const Container = styled.ImageBackground`
    flex: 1;
    flex-direction:row;
    align-items: center;
    justify-content: center;

    background: #E77618;
    position: relative;
`;
const Icon = styled.TouchableOpacity`
    position: absolute;
    top: 5;
    left: 1;

    padding: 20px 20px;
    background: #E77618;
`;


const mapStateToProps = state => {
    return {
        advert: state.AdvertReducer.advert,
        status: state.AdvertReducer.status,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAll: () => dispatch(getAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Advert);