/* eslint-disable */

import { StyledButton } from "./style";


const Button = ({ onClick, color, height, width, text, type, disabled, gameMode, margin }) => {
    return (
        <StyledButton
            onClick={onClick}
            color={color}
            width={width}
            height={height}
            type={type}
            disabled={disabled}
            gameMode={gameMode}
            margin={margin}
        >
            {text}
        </StyledButton>
    )
}

export default Button;
