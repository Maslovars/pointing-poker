import { SetWraper, Settings, Glass, BttnContainer, ChooseContainer, RadioBttnsContainer, Wiever } from "./styles"
import { StyledButton } from "../styles"
import accept from '../../../assets/accept-card.png';
import cancel from '../../../assets/cancel-card.png';
import { useState } from "react";
import { CardMode } from './cardMode/CardMode';
import { GenMode } from "./genMode/genMode";
import { useDispatch } from "react-redux";
import { addNewCards } from "../../../redux/actions/actions";
import { CardType } from '../constants';
import { cardGenerator } from './genMode/generator';
 
export function SettingsMode(props) {
  const dispatch = useDispatch();
  const [mode, setMode] = useState({ card: 'checked', set: '' });
  const { closeHandler } = props;
  const cards = [];
  const collection = {type: CardType.playCard, name: '', value: '', addCheck: false, method: false, num: 2}
  
  function collector(name, value, check = false) {
    if (check) { collection.addCheck = true }
    collection[name] = value;
  }

  function acceptHandler() {
    if (collection.method) {
      const {name, method, num} = collection;
      cards.push(...cardGenerator({name, method, num}));
    } else {
      const { name, value, type, addCheck } = collection;
      cards.push({name, value, type, addCheck});
    }
    dispatch(addNewCards(cards));
  }

  return <SetWraper>
    <Glass />
    <Settings>
      <ChooseContainer>
        <p>choose:</p>
        <RadioBttnsContainer>
          <label><input type='radio' name='mode' defaultChecked={mode.card} onChange={() => setMode({ card: 'checked', set: '' })}/>create a card</label>
          <label><input type='radio' name='mode' defaultChecked={mode.set} onChange={() => setMode({ card: '', set: 'checked' })}/>create a set of cards</label>
        </RadioBttnsContainer>
      </ChooseContainer>
      <Wiever>
      { mode.card === 'checked' ? <CardMode handler={collector}/> : <GenMode handler={collector} /> }
      </Wiever>
      <BttnContainer>
        <StyledButton type='image' src={accept} onClick={() => { acceptHandler(); closeHandler(false) } }/>
        <StyledButton type='image' src={cancel} onClick={() => closeHandler(false)} />
      </BttnContainer>
    </Settings>
  </SetWraper>
}