import styled from "styled-components";
import { modeTypes } from "./constants";

export const Wrapper = styled.div`
  width: 90%;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
  ${(props) => {
    if (
      props.mode === modeTypes.masterGame ||
      props.mode === modeTypes.player
    ) {
      return `{
        width: 450px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: top;
      }`;
    }
  }}
`;

export const something = "something but no default export";
