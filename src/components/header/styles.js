import styled from "styled-components";
import back from "../../assets/back-header.png";
import { theme } from "../../common/theme";

export const StyledHeader = styled.div`
  position: relative;
  width: 98vw;
  height: ${(props) => props.height || "8vh"};
  background-image: url(${back});
  background-size: 100% 100%;
  margin: 0 auto;
`;

export const Logo = styled.img`
  height: inherit;
  position: absolute;
  left: 7%;
  top: 25%;
`;
export const StyledText = styled.p`
  display: flex;
  align-items: center;
  height: 75%;
  margin: 0;
  color: ${theme.colors.white};
  font-size: 3vh;
  position: absolute;
  right: 10%;
`;
