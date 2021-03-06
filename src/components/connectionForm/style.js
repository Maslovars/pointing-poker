/* eslint-disable */

import styled from "styled-components";
import { theme } from "../../common/theme";

export const StyledConnectionForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 35px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledHeading = styled.h2`
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
  margin-bottom: 0;
  @media (max-width: 768px) {
    font-size: 44px;
  } 
`;

export const StyledFormSwitch = styled.div`
  position: relative;
  top: -60px;  
  left: 550px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 818px) {
    position: static;
  } 
`;

export const StyledPar = styled.p`
  margin: 0;
  font-size: 24px;
  line-height: 28px;
  padding-right: 30px;
  @media (max-width: 768px) {
    font-size: 20px;
  } 
`;

export const StyledError = styled.div`  
  padding-top: 50px;
  padding-left: 20px;
  font-size: 14px;
  line-height: 18px;
  color: ${theme.colors.red};  
  @media (max-width: 768px) {
    font-size: 10px;
    padding-top: 40px;
    padding-left: 10px;
  } 
`;

export const StyledFormControl = styled.div`  
  display: flex; 
`;

export const StyledButtonGroup = styled.div`
  width: 100%;
  padding: 15px 0;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;
