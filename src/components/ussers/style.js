import styled from 'styled-components';
import { theme } from '../../common/theme';

export const Wrapper = styled.div`
  margin: 0;
  width: 100vw;
  min-width: 480px;
  min-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
`

export const UsersContainer = styled.div`
  margin: 0;
  min-width: 480px;
  display: flex;
  
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const UserContainer = styled.div`
  margin: 0;
  height: 250px;
  width: 70%;
  min-width: 480px;
  display: flex;
  align-items: top;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
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
  align-items: center;
  justify-content: top;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 10px;
  margin-top: 20px;
  & p {
    margin: 0;
  } 
`;
export const StyledInput = styled.input`
  height: 30px;
  min-width: 100px;
  width: ${props => props.width || '200px'};
  font-size: 14px;
  line-height: 30px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  outline: none;
  ${ props => { if (props.type === 'button') { return `{ background-color: ${theme.colors.lime}; font-size: 18px; opacity: .3; cursor: pointer} &:hover { opacity: 1 };` } } }
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
  opacity: .3;
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
  opacity: .5;
  margin-top: 20px;
  text-align: center;
  align-self: flex-start;
`