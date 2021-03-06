/* eslint-disable */

import styled from "styled-components";
import { theme } from "../../common/theme";

export const StyledSettingsForm = styled.div`
  display: flex;
  flex-direction: column;  
  max-width: 550px;
  margin: 20px 0;
  margin-bottom: 5%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledPar = styled.p`  
  font-size: ${(p) => (p.font === "big" ? "44px" : "24px")};
  line-height: 30px;  
  padding: 0 5px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledHeading = styled.h3`
  text-align: center;
  font-size: 24px;
  line-height: 30px;  
`;

export const StyledInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 549px;
  @media (max-width: 768px) {
    width: 400px;
  }
`;

export const StyledTimer = styled.div`
  display: flex;
  justify-content: flex-end;  
  align-items: center;
`;

export const StyledTimerInput = styled.input`
  width: 95px;
  height: 80px;
  margin-top: 10px;
  font-weight: bold;
  font-size: 64px;
  line-height: 80px;
  box-sizing: border-box;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StyledTimerLabel = styled.label`

`;

export const StyledError = styled.div`
  padding-left: 280px;
  font-size: 14px;
  line-height: 18px;
  color: ${theme.colors.red};  
  @media (max-width: 768px) {
    font-size: 10px;
    padding-left: 200px;
  } 
`;


