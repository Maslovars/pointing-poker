import styled from 'styled-components';
import { theme } from '../../common/theme';
import { type } from './constants';

export const CardsContainer = styled.div`
  min-height: 30vh;
  width: auto;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
export const StyledCard = styled.div`
  height: 18vh;
  width: 12vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${ theme.colors.lightcyan };
  filter: drop-shadow(5px 5px ${ theme.colors.dimgray });
  margin: 0 1vw;
  ${ props => props.type === type.creator || type.rest ? 'justify-content: space-around' : 'justify-content: space-between' };
  ${ props => props.type === type.creator ? `{ opacity: 50%; cursor: pointer; &:hover { opacity: 1 }; }` : '' };
`
export const CardImage = styled.img`
  width: 50%;
`
