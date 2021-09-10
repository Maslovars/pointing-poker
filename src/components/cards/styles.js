import styled from 'styled-components';
import { theme } from '../../common/theme';
import { CardType } from './constants';

export const CardsContainer = styled.div`
  min-height: 30vh;
  width: auto;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
`
export const StyledCard = styled.div`
  height: 18vh;
  width: 12vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${ theme.colors.lightcyan };
  filter: drop-shadow(5px 5px ${ theme.colors.dimgray });
  margin: 1vh 1vw;
  position: relative;
  ${ props => props.type === CardType.creator || CardType.rest ? 'justify-content: space-around' : 'justify-content: space-between' };
  ${ props => props.type === CardType.creator ? `{ opacity: 50%; &:hover { opacity: 1 }; }` : '' };
`
export const CardImage = styled.img`
  align-self: center;
  width: 50%;
  ${ props => props.pointer ? `{ cursor: pointer }` : '' };
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
export const CardButton = styled.input`
  width: 3vh;
  height: 3vh;
  border: 2px solid ${theme.colors.dimgray};
  border-radius: .5vh;
  opacity: .5;
  outline: none;
  position: absolute;
  top: 1vh;
  right: 1vh;
  background: ${theme.colors.lightcyan};
  &:hover {
    border: 2px solid ${theme.colors.dimgray};
    opacity: 1;
  }
`

export const CardLabel = styled.label`
  font-size: 2vh;
  font-weight: bold;
  align-self: center;
`

export const CardInput = styled.input`
  text-align: right;
  width: 80%;
  height: 60%;
  outline: none;
  border: none;
  border-radius: 5px;
`

export const ButtonContainer = styled.div`
  height: 30%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;
`
export const StyledButton = styled.input`
  width: 3vh;
  height: 3vh;
  opacity: .7;
  outline: none;
  background: ${theme.colors.lightcyan};
  &:hover { opacity: 1; }
`

export const DeleteButton = styled(StyledButton)`
  position: absolute;
  left: 1vh;
  bottom: 1vh;
`
