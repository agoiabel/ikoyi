import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { getAll } from '../../shared/actions/ClubGallery.action';


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

class ClubGallery extends React.Component {

    onPressHandler = screen => {
        this.props.navigation.navigate(screen)
    }

    // navigateSinglePage = gallery => {
    //     this.props.navigation.navigate('GallerySingle', {
    //         gallery: gallery
    //     });
    // }

    componentWillMount() {
        this.props.getAll({
            club_id: this.props.navigation.getParam('club_id')
        });
    }

    render() {

        let container = (
            <Loading />
        );

        if (this.props.status == 200) {
            let gallaries = this.props.gallaries.map(gallery => {
                return (
                    <Gallery key={gallery.gallery_id} onPress={() => true}>
                        <Image source={{ uri: gallery.image }} resizeMode={'cover'} style={{ height: 200 }} />
                        <View>
                            <Title>{gallery.image_title}</Title>
                        </View>
                    </Gallery>
                )
            });

            container = (
                <ScrollView contentContainerStyle={styles.infos} showsVerticalScrollIndicator={false}>
                    <Galleries>
                        {gallaries}
                    </Galleries>
                </ScrollView>
            )
        }

        return (
            <Container>
                <Header title={'Gallery'} onPressHandler={() => this.onPressHandler('Dashboard')} />

                <Content>
                    {container}
                </Content>
            </Container>
        )
    }
}


const mapStateToProps = state => {
    return {
        galleries: state.ClubGalleryReducer.galleries,
        status: state.ClubGalleryReducer.get_all_status,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAll: () => dispatch(getAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubGallery);