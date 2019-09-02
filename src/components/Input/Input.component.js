import React from 'react';
import styled from 'styled-components';

const Input = ({label, ...props}) => {

    const borderColor = (!props.valid && props.touched) ? '#E77618' : ((props.valid && props.touched) ? '#00C851' : 'rgba(173, 186, 200, 0.40)');

    return (
        <View>
            <Label>
                <Text>{label}</Text>
            </Label>
            <TextInput
                underlineColorAndroid="transparent"
                borderColor={borderColor}
                {...props}
            />
        </View>
    )
}

const View = styled.View``;
const Text = styled.Text`
    font-family: ArialRoundedMTBold;
    font-size: 13px;
    color: #8B959A;
`;
const Label = styled.View`
    margin-bottom: 2px;
`;
const TextInput = styled.TextInput`
    border: 1px solid ${props => props.borderColor};
    font-family: Helvetica;
    background: #FFFFFF;
    margin-bottom: 25px;
    padding: 10px 15px;
    border-radius: 6px;
    letter-spacing: 0;
    font-size: 13px;
    color: #011F3F;
`;

export default Input;