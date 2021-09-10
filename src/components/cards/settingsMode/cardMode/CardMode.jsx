import { Wrapper } from "./style";
import { eventTypes } from "../../constants";

export function CardMode() {
  return <Wrapper>
      <p>Enter card name (max. 12 signs):</p>
      <input id={eventTypes.addCardName} type='text' placeholder='Enter name...' />
      <p>Enter card value (max. 4 signs):</p>
      <input id={eventTypes.addCardValue} type='text' placeholder='Enter value...' />
      <p>Or choose a standart card:</p>
      <select id={eventTypes.changeType}>
        <option></option>
        <option>REST</option>
        <option>QUESTION</option>
        <option>SKIP</option>
      </select>
  </Wrapper>
}