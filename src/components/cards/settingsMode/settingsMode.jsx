import { SetWraper, Settings, Glass, BttnContainer } from "./styles"
import { StyledButton } from "../styles"
import accept from '../../../assets/accept-card.png';
import cancel from '../../../assets/cancel-card.png';
import { eventTypes } from '../constants';

export function SettingsMode() {
  return <SetWraper>
    <Glass />
    <Settings>
      <BttnContainer>
        <StyledButton id={eventTypes.acceptSettings} type='image' src={accept} />
        <StyledButton id={eventTypes.closeSettings} type='image' src={cancel} />
      </BttnContainer>
    </Settings>
  </SetWraper>
}