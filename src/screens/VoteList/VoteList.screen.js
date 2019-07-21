import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';

import { ScrollView, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Loading from '../../components/Loading';
import { getAll } from '../../shared/actions/VoteList.action';

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
const Tip = styled.TouchableOpacity`
    background: #FFFFFF;

    padding: 15px 15px;
    margin-bottom: 10px;

    border-width: 1;
    border-radius: 3px;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: rgba(227,227,227,0.50);
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Text = styled.Text`
    letter-spacing: 0;
    font-size: 16px;
    font-family: Helvetica;

    margin-left: 10px;
`;





class VoteList extends React.Component {

    onPressHandler = screen => {
        this.props.navigation.navigate(screen)
    }

    componentWillMount() {
        this.props.getAll();
    }

    navigateSinglePage = vote => {
        this.props.navigation.navigate('Vote', {
            vote: vote
        });
    }

    render() {

        let container = (
            <Loading />
        );

        if (this.props.status == 200) {
            let vote_lists = this.props.vote_lists.map(vote_list => {
                return (
                    <Tip key={vote_list.id} onPress={() => this.navigateSinglePage(vote_list)}>
                        <AntDesign name={"questioncircle"} color="#F96060" size={15} />
                        <Text>
                            {vote_list.poll_questions}
                        </Text>
                    </Tip>
                )
            });

            container = (
                <ScrollView contentContainerStyle={styles.infos}>
                    { vote_lists }
                </ScrollView>
            )
        }

        return (
            <Container>
                <Header title={'Vote'} onPressHandler={() => this.onPressHandler('Dashboard')} />

                { container }
            </Container>
        )
    }
}


const mapStateToProps = state => {
    return {
        vote_lists: state.VoteListReducer.vote_lists,
        status: state.VoteListReducer.get_all_status,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAll: () => dispatch(getAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteList);