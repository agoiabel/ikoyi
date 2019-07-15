import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { ScrollView, StyleSheet } from 'react-native';


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
    margin: 0 auto;
`;
const Gallery = styled.View`
    width: 48%;
    height: 100px;
    margin-bottom: 10px;
`;


const GalleryImage = styled.Image`
    width: 100%;
    height: 100px;
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

    render() {
        return (
            <Container>

                <Header title={'Gallery'} onPressHandler={() => this.onPressHandler('Dashboard')} />


                <ScrollView contentContainerStyle={styles.galleries}>


                    <Gallery>
                        <GalleryImage source={require('../../images/new_2.jpeg')}></GalleryImage>
                        <View>
                            <Title>Image 1</Title>
                        </View>
                    </Gallery>

                    <Gallery>
                        <GalleryImage source={require('../../images/new_1.jpeg')}></GalleryImage>
                        <View>
                            <Title>Image 1</Title>
                        </View>
                    </Gallery>


                    <Gallery>
                        <GalleryImage source={require('../../images/new_2.jpeg')}></GalleryImage>
                        <View>
                            <Title>Image 1</Title>
                        </View>
                    </Gallery>

                    <Gallery>
                        <GalleryImage source={require('../../images/new_1.jpeg')}></GalleryImage>
                        <View>
                            <Title>Image 2</Title>
                        </View>
                    </Gallery>

                    <Gallery>
                        <GalleryImage source={require('../../images/new_2.jpeg')}></GalleryImage>
                        <View>
                            <Title>Image 3</Title>
                        </View>
                    </Gallery>

                    <Gallery>
                        <GalleryImage source={require('../../images/new_1.jpeg')}></GalleryImage>
                        <View>
                            <Title>Image 4</Title>
                        </View>
                    </Gallery>


                    <Gallery>
                        <GalleryImage source={require('../../images/new_2.jpeg')}></GalleryImage>
                        <View>
                            <Title>Image 5</Title>
                        </View>
                    </Gallery>

                    <Gallery>
                        <GalleryImage source={require('../../images/new_1.jpeg')}></GalleryImage>
                        <View>
                            <Title>Image 6</Title>
                        </View>
                    </Gallery>


                    <Gallery>
                        <GalleryImage source={require('../../images/new_2.jpeg')}></GalleryImage>
                        <View>
                            <Title>Image 7</Title>
                        </View>
                    </Gallery>

                    <Gallery>
                        <GalleryImage source={require('../../images/new_1.jpeg')}></GalleryImage>
                        <View>
                            <Title>Image 8</Title>
                        </View>
                    </Gallery>


                    <Gallery>
                        <GalleryImage source={require('../../images/new_2.jpeg')}></GalleryImage>
                        <View>
                            <Title>When you see us</Title>
                        </View>
                    </Gallery>

                    <Gallery>
                        <GalleryImage source={require('../../images/new_1.jpeg')}></GalleryImage>
                        <View>
                            <Title>When you see us</Title>
                        </View>
                    </Gallery>


                    <Gallery>
                        <GalleryImage source={require('../../images/new_2.jpeg')}></GalleryImage>
                        <View>
                            <Title>When you see us</Title>
                        </View>
                    </Gallery>

                    <Gallery>
                        <GalleryImage source={require('../../images/new_1.jpeg')}></GalleryImage>
                        <View>
                            <Title>When you see us</Title>
                        </View>
                    </Gallery>
                </ScrollView>
            </Container>
        )
    }
}


export default GalleryScreen;