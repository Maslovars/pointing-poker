/* eslint-disable */

import styled from "styled-components";
import { theme } from "../../common/theme";

export const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0;
  width: 440px;
  border: 1px solid ${theme.colors.dimgray};
  margin: 20px 0;
`;

export const StyledChatField = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: auto;
  min-height: 400px;
  background-color: whitesmoke;
`;

export const StyledChatForm = styled.form`
  display: flex;
  padding-top: 5px;
`;

export const StyledButton = styled.button`
  color: ${(p) =>
    p.color === "white" ? theme.colors.dark_blue : theme.colors.white};
  background: ${(p) =>
    p.color === "white" ? theme.colors.white : theme.colors.dark_blue};
  border: 1px solid ${theme.colors.light_blue};
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 30px;
  width: 80px;
  transition: ${theme.transition};
  margin: ${p => p.margin};
  &:hover {
    cursor: pointer;
    background: ${theme.colors.green};
  }
  &:disabled {
    cursor: auto;
    opacity: 0.5;
    background: ${theme.colors.dark_blue};
  }
`;

export const StyledInput = styled.input`  
  color: ${theme.colors.black};
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.dark_blue};
  box-sizing: border-box;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);  
  font-size: 14px;
  line-height: 20px;
  height: 30px;
  width: 200px;
`;


