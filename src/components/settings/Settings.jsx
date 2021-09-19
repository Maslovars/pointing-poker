/* eslint-disable */
import React from "react";
import Cards from "../cards/Cards.jsx";
import Issues from "../issues/Issues";
import { connect } from "react-redux";

const Settings = (props) => {
  const { cardsValue } = props;
  return (
    <div>
      <Cards mode="master" />
      <Cards mode="player" />
      <div>
        <p>Cards value:</p>
        <p>{cardsValue}</p>
      </div>
      <h2>MASTER</h2>
      <Issues mode="master" />
      <h2>MASTER in GAME</h2>
      <Issues mode="master_game" />
      <h2>PLAYER</h2>
      <Issues mode="player" />
    </div>
  );
};

function mapStatetoProps(state) {
  return {
    cardsValue: state.appState.cards.value,
  };
}

export default connect(mapStatetoProps)(Settings);
