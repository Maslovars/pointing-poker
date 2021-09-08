import { StyledButton } from "./style";


const Button = ({ action, color, height, width, text }) => {
    return (
        <StyledButton
            onClick={action}
            color={color}
            width={width}
            height={height}
        >
            {text}
        </StyledButton>
    )
}

export default Button;
