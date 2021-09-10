import { Wrapper } from '../cardMode/style';
import { genMethod, eventTypes } from '../../constants';

export function GenMode() {
  return <Wrapper>
    <p>Enter card name (max. 6 signs):</p>
    <input id={eventTypes.addCardName} type='text' placeholder='Enter name...' />
    <p>Choose method:</p>
    <select id={eventTypes.changeMethod}>
      <option></option>
      <option>{genMethod.fibo}</option>
      <option>{genMethod.two}</option>
    </select>
    <p>Choose number of cards:</p>
    <select id={eventTypes.changeNum}>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
    </select>
  </Wrapper>
}
