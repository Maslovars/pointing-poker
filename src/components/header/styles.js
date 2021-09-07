import styled from 'styled-components';
import back from '../../assets/back-header.png';

export const StyledHeader = styled.div`
  position: relative;
  width: 99vw;
  height: ${ props => props.height || '8vh'};
  background-image: url(${back});
  background-size: 100% 100%;
  margin: 0 auto;
`

export const Logo = styled.img`
  height: inherit;
  position: absolute;
  left: 7%;
  top: 25%;
`