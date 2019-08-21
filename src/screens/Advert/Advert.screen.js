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
        // setTimeout(() => {
        //     this.onPressHandler();
        // }, 3000);
        //make api request to the backend
        // this.props.getAll();
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

    background: #F96060;
    position: relative;
`;
const Icon = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    right:0;

    padding: 5px 5px;
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