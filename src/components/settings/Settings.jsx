import React from 'react';
import Cards from '../cards/Cards.jsx';
import { connect } from 'react-redux'

const Settings = (props) => {
  const {cardsSettings} = props;
    return <div>
      <Cards mode='master' settingsMode={cardsSettings}/>
      <Cards />  
    </div>

}

function mapStatetoProps(state) {
  return {
    cardsSettings: state.appState.cards.settingsMode,
  }
}

export default connect(mapStatetoProps)(Settings);