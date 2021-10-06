/* eslint-disable */

import styled from "styled-components";
import { theme } from "../../common/theme";

export const StyledButton = styled.button`
  color: ${(p) =>
    p.color === "white" ? theme.colors.dark_blue : theme.colors.white};
  background: ${(p) =>
    p.color === "white" ? theme.colors.white : theme.colors.dark_blue};
  border: 1px solid ${theme.colors.light_blue};
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: ${(p) => (p.height === "big" ? "60px" : "47px")};
  width: ${(p) => (p.width === "big" ? "241px" : "189px")};
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
  @media (max-width: 768px) {
    font-size: 20px;
    height: ${(p) => (p.height === "big" ? "50px" : "37px")};
    width: ${(p) => (p.width === "big" ? "175px" : "139px")};
  }
`;
