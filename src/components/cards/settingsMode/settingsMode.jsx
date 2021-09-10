import { SetWraper, Settings, Glass, BttnContainer, ChooseContainer, RadioBttnsContainer, Wiever } from "./styles"
import { StyledButton } from "../styles"
import accept from '../../../assets/accept-card.png';
import cancel from '../../../assets/cancel-card.png';
import { eventTypes } from '../constants';
import { useState } from "react";
import { CardMode } from './cardMode/CardMode';
import { GenMode } from "./genMode/genMode";
 
export function SettingsMode() {
  const [mode, setMode] = useState({ card: 'checked', set: '' });
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
      { mode.card === 'checked' ? <CardMode /> : <GenMode /> }
      </Wiever>
      <BttnContainer>
        <StyledButton id={eventTypes.acceptSettings} type='image' src={accept} />
        <StyledButton id={eventTypes.closeSettings} type='image' src={cancel} />
      </BttnContainer>
    </Settings>
  </SetWraper>
}