/* eslint-disable */

import { StyledButton } from "./style";


const Button = ({ onClick, color, height, width, text, type }) => {
    return (
        <StyledButton
            onClick={onClick}
            color={color}
            width={width}
            height={height}
            type={type}
        >
            {text}
        </StyledButton>
    )
}

export default Button;
