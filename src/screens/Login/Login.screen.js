import React from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Input from '../../components/Input';
import validate from '../../shared/validation';
import { Secondary } from '../../components/Button/Button.component';

import { startAuth, sampleTest } from '../../shared/actions/Auth.action';

class Login extends React.Component {

    state = {
        response: null,
        sample_message: null,
        formIsValid: false,
        submittingForm: false,
        showPasswordField: false,
        controls: {
            phone: {
                label: 'Mobile Number or Club Reg ID',
                value: '',
                placeholder: 'Mobile Number or Club Reg ID',
                valid: false,
                touched: false,
                errors: [],
                validationRules: {
                    isRequired: true,
                    minLength: 11,
                    maxLength: 11,
                }
            },
            code: {
                label: 'Code',
                value: '',
                placeholder: 'Code',
                valid: false,
                touched: false,
                errors: [],
                validationRules: {
                    isRequired: true
                }
            },
        }
    }

    onPressHandler = screen => {
        return this.props.navigation.navigate(screen);
    }

    navigateToPassword = () => {
        this.setState({
            showPasswordField: !this.state.showPasswordField
        });
    }

    sendCode = () => {
        this.setState({
            submittingForm: true
        });

        const formData = {};
        formData['phone'] = this.state.controls.phone.value;

        this.setState({
            submittingForm: true
        }, async () => {
            this.props.startAuth(formData);
        });
    }

    changeHandler = (key, value, placeholderText) => {
        const updatedControls = {
            ...this.state.controls
        };
        const updatedFormElement = {
            ...updatedControls[key]
        };
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.placeholderText = placeholderText;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

        updatedControls[key] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            formIsValid: formIsValid,
            controls: updatedControls,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if ((prevProps.msg !== this.props.msg) && (this.props.status === 200)) {
            this.navigateToPassword();
        }
        if ((prevProps.msg !== this.props.msg) && (this.props.status === 401)) {
            this.setState({
                submittingForm: false
            });
            return Alert.alert('Opps', this.props.msg);
        }

        if ((prevProps.sample_status !== this.props.sample_status) && (this.props.sample_status === 200)) {
            this.setState({
                sample_message: this.props.sample_status
            });
        }
    }

    confirmCodeHandler = () => {
        if (this.state.controls.code.value !== this.props.code) {
            return Alert.alert('Opps', 'Please check the code');
        }
        return this.onPressHandler('Advert');
    }


    render() {

        let field = (
            <FormView>
                <Input
                    name={"phone"}
                    keyboardType={'numeric'}
                    label={this.state.controls.phone.label}
                    value={this.state.controls.phone.value}
                    valid={this.state.controls.phone.valid}
                    errors={this.state.controls.phone.errors}
                    touched={this.state.controls.phone.touched}
                    placeholder={this.state.controls.phone.placeholder}
                    onChangeText={(value) => this.changeHandler('phone', value, '')}
                />

                <Secondary onPress={this.sendCode}
                           loading={this.state.submittingForm}
                           disabled={(!this.state.controls.phone.valid)}
                           loading={this.state.submittingForm}>
                                Continue
                </Secondary>
            </FormView>
        )

        if (this.state.showPasswordField) {
            field = (
                <FormView>
                    <Input
                        name={"code"}
                        label={this.state.controls.code.label}
                        value={this.state.controls.code.value}
                        valid={this.state.controls.code.valid}
                        errors={this.state.controls.code.errors}
                        touched={this.state.controls.code.touched}
                        placeholder={this.state.controls.code.placeholder}
                        onChangeText={(value) => this.changeHandler('code', value, '')}
                    />
                    {/* <Secondary onPress={() => this.onPressHandler('Advert')}>
                        Login
                    </Secondary> */}

                    <Secondary onPress={this.confirmCodeHandler}>
                        Login
                    </Secondary>
                </FormView>
            )
        }

        return (
            <Container>
                <View>
                    <Header>
                        <BoldText>Login Now</BoldText>
                        <Text>Please login to continue using our app</Text>

                        <Text>{this.state.response}</Text>
                        <Text>{this.state.sample_message}</Text>
                    </Header>
                </View>

                { field }
            </Container>
        )
    }
}

const Container = styled.View`
    flex: 1;
    width: 90%;
    margin: 25px auto 25px auto;
    justify-content: space-between;
`;
const View = styled.View``;
const Header = styled.View`
    margin-top: 20px;
`;
const BoldText = styled.Text`
    font-weight: 300;
    font-size: 22px;
    color: #3E4A59;
`;
const Text = styled.Text`
    font-family: ArialRoundedMTBold;
    font-size: 13px;
    color: #8B959A;
`;
const FormView = styled.View``;



const mapStateToProps = state => {
    return {
        msg: state.AuthReducer.msg,
        code: state.AuthReducer.code,
        status: state.AuthReducer.status,

        sample_status: state.AuthReducer.sample_status,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        startAuth: payload => dispatch(startAuth(payload)),
        sampleTest: payload => dispatch(sampleTest(payload)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);