import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { ScrollView, StyleSheet } from 'react-native';
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
const HeaderLogo = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Image = styled.Image`
    width: 100px;
    height: 100px;
`;
const AdminContainer = styled.View`
    margin-bottom: 20px;
`;
const Admins = styled.View`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;
const Admin = styled.View`
    width: 45%;
    margin-bottom: 15px;
    background: #FFFFFF;
    border-radius: 5px;

    elevation: 2;
    shadow-opacity: 0.5;
    background: #FFFFFF;
    shadow-offset: 4px 8px;
    shadow-color: rgba(42,55,71,0.15);
`;
const AdminBody = styled.View`
    padding: 10px 10px;
`;
const Text = styled.Text`
    font-size: 10px;
    text-align: ${props => props.textAlign};
`;
const AdminContainerTitle = styled.View`
    margin-bottom: 15px;
`;

class About extends React.Component {

    componentWillMount() {
        this.props.getAll();
    }

    onPressHandler = screen => {
        this.props.navigation.navigate(screen);
    }

    componentDidUpdate(prevProps, prevState) {
        console.dir(prevProps);
    }

    render() {
        let container = (
            <Loading />
        );
        if (this.props.status == 200) {
            let about = this.props.about;
            let current_admins = this.props.current_admins.map(current_admin => {
                return (
                    <Admin key={current_admin.exec_id}>
                        <Image source={{ uri: current_admin.exec_picture }} resizeMode={'cover'} style={{ width: '100%', height: 100 }} />
                        <AdminBody>
                            <Text textAlign={'center'}>{current_admin.exec_fullname}</Text>
                            <Text textAlign={'center'}>{current_admin.exec_position}</Text>
                        </AdminBody>
                    </Admin>
                )
            });
            let past_admins = this.props.past_admins.map(past_admin => {
                return (
                    <Admin key={past_admin.id}>
                        <Image source={{ uri: past_admin.picture }} resizeMode={'cover'} style={{ width: '100%', height: 100 }} />
                        <AdminBody>
                            <Text textAlign={'center'}>{past_admin.fullname}</Text>
                            <Text textAlign={'center'}>{past_admin.position}</Text>
                        </AdminBody>
                    </Admin>
                )
            });

            container = (
                <ScrollView contentContainerStyle={styles.tips}>
                    <Content>
                        <HeaderLogo>
                            <Image source={require('../../images/logo.png')} resizeMode={'contain'} />
                        </HeaderLogo>
                        <Title>
                            { about.title }
                        </Title>
                        <Image source={{ uri: about.image }} resizeMode={'cover'} style={{ width: '100%', height: 150, marginTop: 30, marginBottom: 30 }} />
                        <Body>
                            { about.body }
                        </Body>

                        <AdminContainer>
                            <AdminContainerTitle>
                                <Body>Current Admin</Body>
                            </AdminContainerTitle>

                            <Admins>
                                {current_admins}
                            </Admins>
                        </AdminContainer>


                        <AdminContainer>
                            <AdminContainerTitle>
                                <Body>Past Admin</Body>
                            </AdminContainerTitle>

                            <Admins>
                                {past_admins}
                            </Admins>
                        </AdminContainer>
                    </Content>
                </ScrollView>
            )
        }

        return (
            <Container>
                <Header title={'Ikoyi Club 1938'} onPressHandler={() => this.onPressHandler('Dashboard')} />

                { container }
            </Container>
        )
    }
}



const mapStateToProps = state => {
    return {
        about: state.AboutReducer.about,
        status: state.AboutReducer.status,
        past_admins: state.AboutReducer.past_admins,
        current_admins: state.AboutReducer.current_admins,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAll: () => dispatch(getAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);