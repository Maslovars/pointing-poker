import React from "react";
import PropTypes from "prop-types";
import Wrapper from "./style";
import { CardType } from "../../constants";

export default function CardMode(props) {
  const { handler } = props;
  return (
    <Wrapper>
      <p>Enter card name (max. 6 signs):</p>
      <input
        type="text"
        placeholder="Enter name..."
        onChange={(event) => handler("name", String(event.target.value.slice(0, 6)))}
      />
      <p>Enter card value (max. 4 signs):</p>
      <input
        type="text"
        placeholder="Enter value..."
        onChange={(event) => handler("value", String(event.target.value.slice(0, 4)))}
      />
      <p>Or choose a standart card:</p>
      <select onChange={(event) => handler("type", event.target.value, true)}>
        <option value=""> </option>
        <option value={CardType.rest}>{CardType.rest.toUpperCase()}</option>
        <option value={CardType.question}>
          {CardType.question.toUpperCase()}
        </option>
        <option value={CardType.skip}>{CardType.skip.toUpperCase()}</option>
        <option value={CardType.infinity}>
          {CardType.infinity.toUpperCase()}
        </option>
      </select>
    </Wrapper>
  );
}

CardMode.propTypes = {
  handler: PropTypes.func.isRequired,
};
