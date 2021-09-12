import { CardsContainer } from "./styles"
import { Card } from './card'
import { CardsMode, CardType, eventTypes } from './constants';
import { SettingsMode } from './settingsMode/settingsMode';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export function Cards(props) {
  const [settingsMode, setSettingsMode] = useState(false);
  const cards = useSelector(state => state.appState.cards.cardsSet);
  const { mode } = props;
    
  return ( 
    <CardsContainer>
      { cards.map((conf, index) => <Card key={index} buttonId={index} 
        type={conf.type} name={conf.name} value={conf.value} 
        selected={conf.selected} mode={mode}/>) }
      { mode === CardsMode.master ? <Card type={ CardType.creator } onClick={() => setSettingsMode(true)} /> : ''}
      { mode === CardsMode.master &&  settingsMode === true ? <SettingsMode closeHandler={setSettingsMode} /> : ''} 
    </CardsContainer>
  )
}
