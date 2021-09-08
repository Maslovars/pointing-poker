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
  background-color: ${ theme.colors.lightcyan };
  filter: drop-shadow(5px 5px ${ theme.colors.dimgray });
  margin: 0 1vw;
  ${ props => props.type === type.creator || type.rest ? 'justify-content: space-around' : 'justify-content: space-between' };
  ${ props => props.type === type.creator ? `{ opacity: 50%; cursor: pointer; &:hover { opacity: 1 }; }` : '' };
`
export const CardImage = styled.img`
  align-self: center;
  width: 50%;
`

export const Name = styled.p`
  font-size: 2vh;
  font-weight: bold;
  margin: 0;
`
export const TopName = styled(Name)`
  text-align: left;
  align-self: left;
  margin-left: 5%;
`
export const BottomName = styled(Name)`
  text-align: right;
  align-self: right;
  margin-right: 5%;
`

export const Value = styled.p`
  align-self: center;
  font-size: 5vh;
  font-weight: bold;
  margin: 0;
`
