import React from 'react';
import Cards from '../cards/Cards.jsx';
import { connect } from 'react-redux'

const Settings = (props) => {
  const {cardsSettings, cardsValue} = props;
    return <div>
      <Cards mode='master' settingsMode={cardsSettings}/>
      <Cards />
      <div>
        <p>Cards value:</p>
        <p>{cardsValue}</p>
      </div>  
    </div>
}

function mapStatetoProps(state) {
  return {
    cardsSettings: state.appState.cards.settingsMode,
    cardsValue: state.appState.cards.value,
  }
}

export default connect(mapStatetoProps)(Settings);