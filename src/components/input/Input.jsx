import { StyledButton } from "../button/style";
import { InputContainer, StyledInput, StyledInputGroup, StyledLabel } from "./style";


const Input = ({ id, text, endBtn, ...props }) => {
    return (
        <StyledInputGroup>
            <StyledLabel
                htmlFor={id}
            >{text}</StyledLabel>
            <InputContainer>
                <StyledInput {...props} />
                {endBtn && <StyledButton>{endBtn}</StyledButton>}
            </InputContainer>
        </StyledInputGroup>
    )
}

export default Input;
