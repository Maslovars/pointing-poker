import { CardsContainer } from "./styles"
import { Card } from './card'
import { CardsMode, CardType, eventTypes } from './constants';
import { connect } from 'react-redux';
import { editCard, editCardCancel, editCardAccept, deleteCard, openCloseSettings, addNewCards, selectCard } from '../../redux/actions/actions'
import { SettingsMode } from './settingsMode/settingsMode';
import { cardGenerator } from './settingsMode/genMode/generator';

function Cards(props) {
  const { cards,
    mode,
    settingsMode,
    cardEditor,
    openSetting,
    closeSetting,
    addCards,
  } = props;
  let name = '';
  let value = '';
  let typeCard = CardType.playCard;
  let addCheck = false;
  let newCards = [];
  let method = '';
  let num = 2;
  
  return ( 
    <CardsContainer onClick={(event) => handler(event)} onChange={(event) => handler(event)}>
      { cards.map((conf, index) => <Card key={index} buttonId={index} 
        type={conf.type} name={conf.name} value={conf.value} 
        selected={conf.selected} mode={mode}/>) }
      { mode === CardsMode.master ? <Card type={ CardType.creator } /> : ''}
      { mode === CardsMode.master &&  settingsMode === true ? <SettingsMode /> : ''} 
    </CardsContainer>
  )

function handler(event) {
  const id = event.target.id.replace(/[a-z _]/ig, '');
  const type = event.target.id.replace(/[0-9]/g, '');
  if (type === eventTypes.edit) { cardEditor(id) }
  if (type === eventTypes.newCard) { openSetting() }
  if (type === eventTypes.closeSettings) { closeSetting() }
  if (type === eventTypes.addCardName) { name = event.target.value.slice(0, 7) }
  if (type === eventTypes.addCardValue) { value = event.target.value.slice(0, 4) }
  if (type === eventTypes.acceptSettings && !method) { addCards([{type: typeCard, name, value, addCheck}]); closeSetting() }
  if (type === eventTypes.acceptSettings && method) { newCards = cardGenerator({name, method, num});addCards(newCards); closeSetting() }
  if (type === eventTypes.changeType) { typeCard = event.target.value.toLowerCase(); addCheck = true}
  if (type === eventTypes.changeMethod) { method = event.target.value }
  if (type === eventTypes.changeNum) { num = event.target.value }
}
}

function mapStatetoProps(state) {
  return { cards: state.appState.cards.cardsSet }
}

function mapDispatchToState(dispatch) {
  return {
    cardEditor: (id) => dispatch(editCard(id)),
    cancelEdit: (id) => dispatch(editCardCancel(id)),
    acceptEdit: (data) => dispatch(editCardAccept(data)),
    cardDelete: (id) => dispatch(deleteCard(id)),
    openSetting: () => dispatch(openCloseSettings(true)),
    closeSetting: () => dispatch(openCloseSettings(false)),
    addCards: (data) => dispatch(addNewCards(data)),
    selCard: (id) => dispatch(selectCard(id)),
  }
}

export default connect (mapStatetoProps, mapDispatchToState)(Cards)