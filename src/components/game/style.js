import styled from 'styled-components';
import { theme } from '../../common/theme';

export const GameWrapper = styled.div`
  width: 90%;
  min-width: 480px;
  display: flex;
  align-items: top;
  flex-wrap: wrap;
  justify-content: left;
`;

export const Message = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  ${ props => {
    if (props.type === 'alert') { return `border: 6px solid ${theme.colors.red};` }
    if (props.type === 'warn') { return `border: 6px solid ${theme.colors.dark_orange};` }
    return `border: 6px solid ${theme.colors.dark_blue};`
  } }
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

