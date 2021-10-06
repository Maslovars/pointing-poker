import styled from "styled-components";
import { theme } from "../../common/theme";

export const GameWrapper = styled.div`  
  min-width: 500px;
  display: flex;
  align-items: top;
  flex-wrap: wrap;
  justify-content: left;
  ${props => {
    if (props.res) {
      return `
          {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
          }
        `
    }
  }
  }
  & h1, h2 {
    font-size: 48px;
    font-weight: bold;
  }
  & h2 {
    margin: 0;
    font-size: 28px;
  }
  @media (max-width: 1024px) {    
    justify-content: center;  
  }  
`;

export const Message = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  ${props => {
    if (props.type === 'alert') { return `border: 6px solid ${theme.colors.red};` }
    if (props.type === 'warn') { return `border: 6px solid ${theme.colors.dark_orange};` }
    return `border: 6px solid ${theme.colors.dark_blue};`
  }}
  border-radius: 10px;
  & p {
    margin: 10px 20px;
  }
`;

export const UsersWrapper = styled.div`
  width: 30%;
  min-width: 480px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const MainContainer = styled.div`
  width: 60%;
  min-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ResultContainer = styled.div`
  width: 96%;
  min-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const CardsContainer = styled.div`
  width: 90%;
  min-width: 480px;
  display: flex;
  align-items: top;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const CardContainer = styled.div`
  min-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledPercent = styled.div`
  margin: 0;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 30px 0;
`;

export const StyledIssue = styled.div`
  font-style: italic;
  font-weight: bold;
  font-size: 28px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export const StyledTitle = styled.div`  
  font-weight: bold;
  font-size: 40px;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`
