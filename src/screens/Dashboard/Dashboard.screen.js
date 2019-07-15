import React from 'react';
import styled from 'styled-components';

import { ScrollView, StyleSheet } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginTop: 30,
        marginBottom: 30,
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingBottom: 35,

        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});



class Dashboard extends React.Component {

    onPressHandler = screen => {
        this.props.navigation.navigate(screen);
    }

    render() {
        return (
            <Container>

                <Header>
                    <Setting>
                        <HeaderView>
                            <MaterialIcons name={"menu"} color="#F96060" size={20} />
                        </HeaderView>
                        <View>
                            <Profile source={require('../../images/dangote-bloomberg.jpg')} />
                        </View>
                        <HeaderView>
                            <MaterialCommunityIcons name={"lead-pencil"} color="#F96060" size={20} />
                        </HeaderView>
                    </Setting>
                    <Owner>
                        Aliko Dangote
                    </Owner>
                    <Border />
                </Header>

                <ScrollView contentContainerStyle={styles.container}>

                    <Card onPress={()=>this.onPressHandler('Session')}>
                        <View>
                            <FontAwesome name={"newspaper-o"} color="#F96060" size={30} />
                            <Text>News/Events</Text>
                        </View>
                    </Card>
                    <Card onPress={() => this.onPressHandler('Club')}>
                        <View>
                            <AntDesign name={"home"} color="#3ECDE0" size={30} />
                            <Text>Club Sections</Text>
                        </View>
                    </Card>
                    <Card onPress={() => this.onPressHandler('Security')}>
                        <View>
                            <Ionicons name={"md-megaphone"} color="#6CB56E" size={30} />
                            <Text>Security Alerts</Text>
                        </View>
                    </Card>
                    <Card onPress={() => this.onPressHandler('Health')}>
                        <View>
                            <FontAwesome name={"stethoscope"} color="#6CB56E" size={30} />
                            <Text>Health tips</Text>
                        </View>
                    </Card>
                    <Card onPress={() => this.onPressHandler('VoteList')}>
                        <View>
                            <MaterialCommunityIcons name={"vote-outline"} color="#F96060" size={30} />
                            <Text>Voting</Text>
                        </View>
                    </Card>
                    <Card onPress={() => this.onPressHandler('Gallery')}>
                        <View>
                            <SimpleLineIcons name={"picture"} color="#3ECDE0" size={30} />
                            <Text>Gallery</Text>
                        </View>
                    </Card>
                    <Card onPress={() => this.onPressHandler('Customer')}>
                        <View>
                            <Entypo name={"sports-club"} color="#6CB56E" size={30} />
                            <Text>About Ikoyi Club</Text>
                        </View>
                    </Card>
                    <Card onPress={() => this.onPressHandler('Promotion')}>
                        <View>
                            <AntDesign name={"star"} color="#6CB56E" size={30} />
                            <Text>Promotions and Discount</Text>
                        </View>
                    </Card>
                </ScrollView>
            </Container>
        )
    }
}





const Container = styled.View`
    flex: 1;
    width: 100%;
    margin: 0 auto;
`;
const Header = styled.View`
    background: #F96060;

    border-bottom-width: 1px;
    border-bottom-color: #D3D9E0;
`;
const Setting = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    width: 90%;
    margin: 15px auto;
`;
const HeaderView = styled.View`
    align-items: center;
    justify-content: center;


    background: #FFFFFF;
    elevation: 2;
    shadow-color: rgba(42,55,71,0.15);
    shadow-offset: 8px 4px;
    shadow-opacity: 0.5;

    border-radius: 18px;
    padding: 5px 5px;
`;
const Owner = styled.Text`
    margin-top: 10px;

    font-family: Helvetica;
    font-size: 20px;
    color: #FFFFFF;
    text-align: center;
`;
const Profile = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;
const Border = styled.Text``;
const Card = styled.TouchableOpacity`
    width: 45%;

    align-items: center;
    justify-content: center;

    background: #FFFFFF;
    elevation: 2;
    shadow-color: rgba(42,55,71,0.15);
    shadow-offset: 4px 8px;
    shadow-opacity: 0.5;

    border-radius: 18px;

    margin-bottom: 15px;
    padding: 25px 25px;
`;


const View = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Text = styled.Text`
    text-align: center;
`;





export default Dashboard;