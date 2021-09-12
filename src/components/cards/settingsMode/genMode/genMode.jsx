import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../cardMode/style";
import { genMethod } from "../../constants";

export default function GenMode(props) {
  const { handler } = props;
  return (
    <Wrapper>
      <p>Enter card name (max. 6 signs):</p>
      <input
        type="text"
        placeholder="Enter name..."
        onChange={(event) =>
          handler("name", String(event.target.value.slice(0, 6)))
        }
      />
      <p>Choose method:</p>
      <select onChange={(event) => handler("method", event.target.value)}>
        <option value=""> </option>
        <option>{genMethod.fibo}</option>
        <option>{genMethod.two}</option>
      </select>
      <p>Choose number of cards:</p>
      <select onChange={(event) => handler("num", Number(event.target.value))}>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
      </select>
    </Wrapper>
  );
}

GenMode.propTypes = {
  handler: PropTypes.func.isRequired,
};
