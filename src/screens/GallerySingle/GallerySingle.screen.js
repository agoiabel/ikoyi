import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import { Image, ScrollView, StyleSheet } from 'react-native';

import Loading from '../../components/Loading';
import { getAll } from '../../shared/actions/Gallery.action';


const styles = StyleSheet.create({
    galleries: {
        width: '90%',
        marginTop: 30,
        marginBottom: 30,
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingBottom: 25,

        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
});


const Container = styled.View`
    flex: 1;
    width: 100%;
`;
const Gallery = styled.TouchableOpacity`
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
`;
const View = styled.View`
    padding: 5px 5px;
    background: #23271A;
    opacity: .5;

    position: absolute;
    bottom: 0;
    width: 100%;
`;
const Title = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
`;
const Body = styled.Text`
    color: #FFFFFF;
    font-size: 12px;
`;


class GalleryScreen extends React.Component {

    onPressHandler = screen => {
        this.props.navigation.navigate(screen)
    }

    render() {
        let gallery = this.props.navigation.getParam('gallery');

        return (
            <Container>
                <Header title={'Gallery'} onPressHandler={() => this.onPressHandler('Gallery')} />
                <ScrollView contentContainerStyle={styles.tips}>
                    <Gallery key={gallery.id} onPress={() => this.navigateTo(gallery)}>
                        <Image source={{ uri: gallery.image }} resizeMode={'cover'} style={{ width: '100%', height: '100%' }} />
                        <View>
                            <Title>{gallery.image_title}</Title>
                        </View>
                        <Body>
                            {gallery.image_description}
                        </Body>
                    </Gallery>
                </ScrollView>
            </Container>
        )
    }
}


const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);