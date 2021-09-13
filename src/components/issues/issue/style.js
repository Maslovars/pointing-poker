import styled from 'styled-components';
import { theme } from '../../../common/theme';
import { issueTypes, priorityTypes, creatorMode } from '../constants';

export const Wrapper = styled.div`
  height: 80px;
  width: 290px;
  background-color: ${theme.colors.white};
  filter: drop-shadow(5px 5px ${theme.colors.dimgray});
  margin: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const TextContainer = styled.div`
  height: 96%;
  width: 70%;
  display: flex;
  align-items: center;
  font-size: 24px;
  padding-left: 5%;
  color: ${props => {
    if (props.type === issueTypes.creator && props.mode === creatorMode.createIssue) { return theme.colors.black }
    if (props.type === issueTypes.creator) { return theme.colors.dimgray }
  }
  };
  & a {
    text-decoration: none;
    font-size: 24px;
    color: ${props => {
      if (props.priority === priorityTypes.low) { return theme.colors.lime }
      if (props.priority === priorityTypes.middle) { return theme.colors.dark_orange }
      if (props.priority === priorityTypes.hight) { return theme.colors.red } 
    } 
  }
  }
`

export const ButtonsContainer = styled.div`
  height: 96%;
  width: 24%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const IssueButton = styled.input`
  width: 46%;
  opacity: .6;
  opacity: ${props => {if (props.mode === creatorMode.createIssue) {return 1}}};
  &:hover {
    opacity: 1;
  }
`

