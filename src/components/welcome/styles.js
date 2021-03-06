import styled from "styled-components";
import { theme } from "../../common/theme";

export const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
`;

export const WelcomeGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const Logo = styled.img`
  max-width: 480px;
  margin: 0 auto;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    max-width: 400px;
  } 
`;
export const StyledPar = styled.p`
  padding-bottom: 10px;
  padding-right: 120px;
  margin: 0;
  font-size: 24px;
  line-height: 28px;
  @media (max-width: 768px) {
    font-size: 20px;
    padding-right: 85px;
  } 
`;

export const StyledText = styled.h2`
  color: ${theme.colors.turquoise};
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  @media (max-width: 768px) {
    font-size: 40px;
  } 
`;
