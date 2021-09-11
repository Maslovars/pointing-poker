import styled from "styled-components";
import { theme } from "../../common/theme";

export const StyledFileUploader = styled.div`
    display:flex;
    flex-direction: column;
`;

export const StyledGroup = styled.div`
    display:flex;
    justify-content: flex-start;
`;

export const StyledPar = styled.p`
    padding: 7px 0;  
    margin: 0;  
    font-size: 24px;
    line-height: 28px;  
    font-weight: bold;
`

export const StyledDiv = styled.div`   
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.black};
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.dark_blue};
    box-sizing: border-box;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 0px 10px;
    font-size: 24px;
    line-height: 28px;
    height: 47px;
    width: 276px;
`;

export const StyledAva = styled.img`
    margin-top: 15px;
    width: 83px;
    height: 83px;
    ${'' /* object-fit: cover; */}
    border-radius: 50%;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`;




