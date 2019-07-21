import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Input from '../../components/Input';
import validate from '../../shared/validation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Secondary } from '../../components/Button/Button.component';
import { Alert, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { startAuth } from '../../shared/actions/Auth.action';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        marginVertical: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between'
    }
});

class Login extends React.Component {

    state = {
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
            submittingForm: false,
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
        let subTitle = (
            <Text>Please login to continue using our app</Text>
        );
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
            subTitle = (
                <BackButton onPress={this.navigateToPassword}>
                    <Ionicons name={"ios-arrow-round-back"} color="rgba(249, 96, 96, 0.5)" size={30} />
                </BackButton>
            );
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
                    <Secondary onPress={this.confirmCodeHandler}>
                        Login
                    </Secondary>
                </FormView>
            )
        }


        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View>
                    <Header>
                        <BoldText>Login Now</BoldText>
                        {subTitle}
                        <Text>{this.state.response}</Text>
                        <Text>{this.state.sample_message}</Text>
                    </Header>
                </View>

                {field}
            </KeyboardAvoidingView>
        )
    }
}

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
    font-size: 13px;
    color: #8B959A;
`;
const FormView = styled.View``;
const BackButton = styled.TouchableOpacity``;



const mapStateToProps = state => {
    return {
        msg: state.AuthReducer.msg,
        code: state.AuthReducer.code,
        status: state.AuthReducer.status,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        startAuth: payload => dispatch(startAuth(payload)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);