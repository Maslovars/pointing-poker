import React from 'react';
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from './InputTollgestyle';

const InputToggle = ({ ...props }) => {
    return (
        <CheckBoxWrapper {...props}>
            <CheckBox id="checkbox" type="checkbox" {...props} />
            <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
    )
};

export default InputToggle;
