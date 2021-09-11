import { InputContainer, StyledInput, StyledInputGroup, StyledLabel } from "./style";


const Input = ({ id, text, endBtn, ...props }) => {
    return (
        <StyledInputGroup>
            <StyledLabel
                htmlFor={id}
                {...props}
            >{text}</StyledLabel>
            <InputContainer>
                <StyledInput {...props} />
                {endBtn && <>{endBtn}</>}
            </InputContainer>
        </StyledInputGroup>
    )
}

export default Input;
