import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../components/Header';

import Loading from '../../components/Loading';
import { getAll } from '../../shared/actions/Vote.action';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Secondary } from '../../components/Button/Button.component';


const Container = styled.View`
    flex: 1;
    width: 100%;
    margin: 0 auto;
`;
const Votes = styled.View`
    width: 90%;
    margin: 30px auto;
`;
const Vote = styled.View`
    margin-bottom: 20px;
`;
const Question = styled.Text`
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: bold;
`;
const Options = styled.View``;
const Option = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;
const Text = styled.Text`
    margin-left: 5px;
`;



class VoteScreen extends React.Component {

    state = {
        options: []
    }

    componentDidMount() {
        this.format(this.props.navigation.getParam('vote'));
    }

    format = vote => {
        let options = vote.options.map(poll_option => {

            poll_option['is_picked'] = false;

            return poll_option;
        });

        this.setState({
            options: options
        });
    }

    onPressHandler = screen => {
        this.props.navigation.navigate(screen)
    }


    render() {

        let container = (
            <Loading />
        );

        if (this.state.options) {
            let vote = this.props.navigation.getParam('vote');

            let options = this.state.options.map(option => {
                let icon = <FontAwesome name={"circle-o"} color="#8B959A" size={10} />
                if (option.is_picked) {
                    icon = <FontAwesome name={"circle"} color="#8B959A" size={10} />
                }
                return (
                    <Option key={option.id}>
                        {icon}
                        <Text>{option.option_name}</Text>
                    </Option>
                )
            });

            let voteContainer = (
                <Vote key={vote.id}>
                    <Question>
                        {vote.poll_questions}
                    </Question>
                    {options}
                </Vote>
            )

            container = (
                <Votes>
                    { voteContainer }
                    <Secondary onPress={this.send}>
                        Vote
                    </Secondary>
                </Votes>
            )
        }

        return (
            <Container>
                <Header title={'Vote'} onPressHandler={() => this.onPressHandler('VoteList')} />

                { container }
            </Container>
        )
    }
}



const mapStateToProps = state => {
    return {
        votes: state.VoteReducer.votes,
        status: state.VoteReducer.get_all_status,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAll: () => dispatch(getAll())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(VoteScreen);