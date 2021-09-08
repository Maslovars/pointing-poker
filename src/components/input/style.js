import styled from "styled-components";
import { theme } from "../../common/theme";

export const StyledInput = styled.input`
color: ${theme.colors.black};
background: ${theme.colors.white};
border: 1px solid ${theme.colors.dark_blue};
box-sizing: border-box;
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 0px 0px 0px 10px;
font-size: 24px;
line-height: 28px;
height: 47px;
width: ${p => p.width === "big" ? "465px" : "276px"};
`;

export const StyledLabel = styled.label`
font-size: 24px;
line-height: 28px;
`;

export const StyledInputGroup = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: column;
`;

export const InputContainer = styled.div`

`;


