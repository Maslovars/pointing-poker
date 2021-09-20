import styled from "styled-components";
import { theme } from "../../common/theme";

export const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const CheckBoxLabel = styled.label`
  width: 55px;
  height: 30px;
  border-radius: 24px;
  background: ${theme.colors.gray};
  cursor: pointer;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 5px;
    background: ${theme.colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: ${theme.transition};
  }
`;
export const CheckBox = styled.input`
  display: none;
  opacity: 0;
  z-index: 1;
  width: 55px;
  height: 30px;
  border-radius: 24px;
  &:checked + ${CheckBoxLabel} {
    background: ${theme.colors.green};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-left: 30px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transition: ${theme.transition};
    }
  }
`;
