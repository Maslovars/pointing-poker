import styled from "styled-components";
import { theme } from "../../common/theme";

export const StyledFileUploader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledGroup = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const StyledPar = styled.p`
  padding: 7px 0;
  margin: 0;
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
`;

export const StyledDiv = styled.div`
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 5px;
  text-align: center;
  color: ${theme.colors.black};
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray};
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 0px 10px;
  font-size: 24px;
  line-height: 47px;
  height: 47px;
  width: 276px;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: 20px;
    height: 37px;
    width: ${(p) => (p.width === "big" ? "365px" : "216px")};
    line-height: 35px;
  }
`;

export const StyledAva = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  width: 83px;
  height: 83px;
  border-radius: 50%;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 2px solid ${theme.colors.green};
  overflow: hidden;
  background-color: ${theme.colors.green};
  @media (max-width: 768px) {
    width: 63px;
    height: 63px;
  }
`;

export const StyledInitials = styled.span`
  display: flex;
  justify-content: center;
  overflow: hidden;
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  margin: auto;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
