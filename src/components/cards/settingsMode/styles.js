import styled from "styled-components";
import { theme } from "../../../common/theme";

export const SetWraper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Glass = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.white};
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Settings = styled.div`
  width: 480px;
  height: 260px;
  background-color: ${theme.colors.lightcyan};
  border-radius: 20px;
  position: absolute;
  align-self: center;
  top: 3vh;
`;

export const BttnContainer = styled.div`
  width: 120px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 180px;
  top: 210px;
`;
export const ChooseContainer = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 40px;
  top: 10px;
  & p {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    margin: 3px;
  }
`;

export const RadioBttnsContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid ${theme.colors.gray};
  border-radius: 5px;
  & input {
    margin-right: 5px;
  }
  & label {
    display: flex;
    align-items: center;
  }
`;
export const Wiever = styled.div`
  width: 400px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid ${theme.colors.gray};
  border-radius: 5px;
  position: absolute;
  left: 40px;
  top: 70px;
`;
