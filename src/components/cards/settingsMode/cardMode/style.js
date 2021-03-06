import styled from "styled-components";
import { theme } from "../../../../common/theme";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  & p {
    margin: 5px;
    font-size: 14px;
  }
  & input {
    width: 50%;
    height: 16px;
    text-align: right;
    border: none;
    outline: none;
    border-radius: 5px;
  }
  & select {
    height: 16px;
    text-align: center;
    background-color: ${theme.colors.white};
    border: none;
    outline: none;
    border-radius: 5px;
  }
`;

export default Wrapper;
