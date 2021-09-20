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
  height: 15vh;
  width: 70%;
  min-width: 480px;
  display: flex;
  align-items: top;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const UserWrapper = styled.div`
  align-self: top;
  margin-top: 10px; 
`;
export const LeaveButton = styled.input`
  background-color: ${theme.colors.dimgray};
  align-self: flex-end;
  width: 180px;
  height: 50px;
  border: none;
  outline: none;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  opacity: .6;
  cursor: pointer;
  &:hover {
    opacity: 1;
  } 
`;