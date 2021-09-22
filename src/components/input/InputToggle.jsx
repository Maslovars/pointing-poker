/* eslint-disable */
import React from 'react';
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from './InputTollgestyle';

const InputToggle = ({ id, ...props }) => {
    return (
        <CheckBoxWrapper {...props}>
            <CheckBox id={id} type="checkbox" {...props} />
            <CheckBoxLabel htmlFor={id} />
        </CheckBoxWrapper>
    )
};

export default InputToggle;
