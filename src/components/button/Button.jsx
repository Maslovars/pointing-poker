/* eslint-disable */

import { StyledButton } from "./style";


const Button = ({ onClick, color, height, width, text }) => {
    return (
        <StyledButton
            onClick={onClick}
            color={color}
            width={width}
            height={height}
        >
            {text}
        </StyledButton>
    )
}

export default Button;
