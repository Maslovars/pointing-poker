import styled from "styled-components";
import { theme } from "../../../common/theme";

export const StyledModal = styled.div`
  width: 450px;
  height: 450px;
  position: absolute;
  top: 60px;
  left: calc(50% - 225px);
  background-color: ${theme.colors.lightcyan};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
`;

export const StyledHeader = styled.h1`
  font-size: 42px;
  margin: 0;
  margin-top: 20px;
  font-weight: bold;
`;

export const SelectContainer = styled.div`
  width: 376px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;
`;

export const StyledSelect = styled.select`
  text-align: center;
  font-weight: bold;
  height: 47px;
  font-size: 24px;
  line-height: 28px;
  width: 260px;
  outline: none;
  border-radius: 0px 0px 0px 10px;
  color: ${theme.colors.black};
  background: ${theme.colors.white};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid ${theme.colors.dark_blue};
`;

export const ButtonsContainer = styled.div`
  margin-top: 40px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;
`;
