/* eslint-disable */
import React from 'react';
import Cards from '../cards/Cards.jsx';
import Issues from '../issues/Issues';
import { connect } from 'react-redux';

const Settings = (props) => {
  const {cardsSettings, cardsValue} = props;
    return <div>
      <Cards mode='master' />
      <Cards mode='player' />
      <div>
        <p>Cards value:</p>
        <p>{cardsValue}</p>
      </div> 
      <Issues mode='master' /> 
    </div>
}

function mapStatetoProps(state) {
  return {
    cardsSettings: state.appState.cards.settingsMode,
    cardsValue: state.appState.cards.value,
  }
}

export default connect(mapStatetoProps)(Settings);