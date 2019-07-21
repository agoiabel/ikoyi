import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { getAll } from '../../shared/actions/Gallery.action';


const styles = StyleSheet.create({
    galleries: {
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
const Galleries = styled.View`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;
const Gallery = styled.TouchableOpacity`
    width: 48%;
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
    font-size: 12px;
`;


class GalleryScreen extends React.Component {

    onPressHandler = screen => {
        this.props.navigation.navigate(screen)
    }

    navigateSinglePage = gallery => {
        this.props.navigation.navigate('GallerySingle', {
            gallery: gallery
        });
    }

    componentWillMount() {
        this.props.getAll();
    }

    render() {

        let container = (
            <Loading />
        );

        if (this.props.status == 200) {
            let gallaries = this.props.gallaries.map(gallery => {
                return (
                    <Gallery key={gallery.gallery_id} onPress={() => this.navigateSinglePage(gallery)}>
                        <Image source={{ uri: gallery.image }} resizeMode={'cover'} style={{ height: 200 }} />
                        <View>
                            <Title>{gallery.image_title}</Title>
                        </View>
                    </Gallery>
                )
            });

            container = (
                <ScrollView contentContainerStyle={styles.infos}>
                    <Galleries>
                        {gallaries}
                    </Galleries>
                </ScrollView>
            )
        }

        return (
            <Container>
                <Header title={'Gallery'} onPressHandler={() => this.onPressHandler('Dashboard')} />

                { container }
            </Container>
        )
    }
}


const mapStateToProps = state => {
    return {
        gallaries: state.GalleryReducer.gallaries,
        status: state.GalleryReducer.get_all_status,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAll: () => dispatch(getAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);