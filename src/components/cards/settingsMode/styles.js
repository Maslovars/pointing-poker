import styled from 'styled-components';
import { theme } from '../../../common/theme';
import { StyledButton } from "../styles"

export const SetWraper = styled.div`
  width: 100%;
  height: 100%;
`

export const Glass = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${ theme.colors.white };
  opacity: .5;
  position: absolute;
  top: 0;
  left: 0;
`

export const Settings = styled.div`
  width: 90%;
  min-height: 50%;
  background-color: ${ theme.colors.lightcyan };
  position: absolute;
  left: 5%;
  top: 0;
`
export const BttnContainer = styled.div`
  width: 30%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
