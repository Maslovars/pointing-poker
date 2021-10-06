import styled from "styled-components";
import { theme } from "../../../common/theme";

export const User = styled.div`
  height: ${(p) => (p.height === "small" ? "40px" : "70px")};
  width: ${(p) => (p.width === "small" ? "150px" : "220px")};  
  margin: 5px 5px;
  background-color: ${theme.colors.lightcyan};
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: left;
  filter: drop-shadow(5px 5px ${theme.colors.dimgray});
`;
export const Avatar = styled.div`
  height: ${(p) => (p.height === "small" ? "30px" : "50px")};
  width: ${(p) => (p.width === "small" ? "30px" : "50px")};
  ${'' /* height: 50px;
  width: 50px; */}
  background-color: ${theme.colors.white};
  border-radius: 50%;
  margin-left: 10px;
  text-align: center;
  font-size: ${(p) => (p.width === "small" ? "15px" : "26px")};
  line-height: ${(p) => (p.width === "small" ? "30px" : "50px")};
  ${'' /* font-size: 26px;
  line-height: 50px; */}
  font-weight: bold;
`;
export const AvatarImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  height: ${(p) => (p.height === "small" ? "30px" : "50px")};
  width: ${(p) => (p.width === "small" ? "30px" : "50px")};
  ${'' /* width: 50px;
  height: 50px; */}
  border-radius: 50%;
  border: 1px solid ${theme.colors.green};
  overflow: hidden;
`;
export const TextContainer = styled.div`
  height: ${(p) => (p.height === "small" ? "50px" : "60px")};
  width: ${(p) => (p.width === "small" ? "95px" : "130px")};
  ${'' /* width: 130px;
  height: 60px; */}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  & p {
    margin: 0;
    font-size: ${(p) => (p.height === "small" ? "10px" : "16px")};
    ${'' /* font-size: 16px; */}
  }
  & :last-child {
    font-size: ${(p) => (p.height === "small" ? "6px" : "10px")};
    ${'' /* font-size: 10px; */}
  }
  & :first-child {
    font-weight: bold;
    font-size: ${(p) => (p.height === "small" ? "14px" : "20px")};
    ${'' /* font-size: 20px; */}
  }
`;
export const ImgButton = styled.input`
  height: ${(p) => (p.height === "small" ? "20px" : "30px")};
  width: ${(p) => (p.width === "small" ? "20px" : "30px")};
  ${'' /* width: 30px;
  height: 30px; */}
  border: none;
  outline: none;
  cursor: pointer;
  padding-right: 5px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
