import styled from "styled-components";
import { theme } from "../../common/theme";

export const Wrapper = styled.div`
  margin: 0;
  width: 50vw;
  min-width: 500px;
  min-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;  
`;

export const UsersContainer = styled.div`
  margin: 0;
  min-width: 500px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  ${props => {
    if (props.gameMode === true) {
      return `{flex-direction: column;
              align-items: center;
              justify-content: flex-start;}
              `
    }
  }}
`;
export const UserContainer = styled.div`
  margin: 0;
  width: 70%;
  min-height: 250px;
  min-width: 480px;
  display: flex;
  align-items: top;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
  ${props => {
    if (props.gameMode === true) {
      return `{width: 260px;
              min-width: 260px;
              flex-direction: column;
              align-items: center;
              justify-content: flex-start;
              min-height: 100px;}
              `
    }
  }}
`;
export const UserWrapper = styled.div`
  align-self: top;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: top;
`;
export const StyledLinkContainer = styled.div`
  display: flex;
  min-width: 480px;
  flex-direction: column;
  ${'' /* align-items: center;
  justify-content: top; */}
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  ${'' /* text-transform: uppercase; */}
  margin-left: 10px;
  margin-top: 20px;
  & p {
    margin: 0;
    padding: 5px 0;
    font-style: italic;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
  }
`;
export const StyledInput = styled.input`
  height: 30px;
  min-width: 100px;
  width: ${(props) => props.width || "200px"};
  font-size: 14px;
  line-height: 30px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  outline: none;
  ${(props) => {
    if (props.type === "button") {
      return `{ background-color: ${theme.colors.lime}; font-size: 18px; opacity: .3; cursor: pointer} &:hover { opacity: 1 };`;
    }
  }}
`;
export const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  min-width: 200px;
`;
export const LeaveButton = styled.input`
  background-color: ${theme.colors.red};
  border-radius: 7px;
  color: ${theme.colors.white};
  align-self: flex-end;
  width: 180px;
  height: 50px;
  border: none;
  outline: none;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  opacity: 0.3;
  ${props => {
    if (props.gameMode === true) {
      return `{align-self: center;
              margin-top: 30px;
              margin-right: 0;}
              `
    }
  }}
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
export const StartButton = styled(LeaveButton)`
  background-color: ${theme.colors.dark_blue};
  width: 180px;
  height: 40px;
  font-size: 18px;
  opacity: 0.5;
  margin-top: 20px;
  text-align: center;
  align-self: flex-start;
`;
