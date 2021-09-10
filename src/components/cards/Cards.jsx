import { CardsContainer } from "./styles"
import { Card } from './card'
import { CardsMode, CardType, eventTypes } from './constants';
import { connect } from 'react-redux';
import { editCard, editCardCancel, editCardAccept, deleteCard, openCloseSettings, addNewCards } from '../../redux/actions/actions'
import { SettingsMode } from './settingsMode/settingsMode';

function Cards(props) {
  const { cards,
    mode,
    settingsMode,
    cardEditor,
    cancelEdit,
    acceptEdit,
    cardDelete,
    openSetting,
    closeSetting,
    addCards
  } = props;
  let name = '';
  let value = '';
  let typeCard = CardType.playCard;
  let addCheck = false;
  let newCards = [];
  return ( 
    <CardsContainer onClick={(event) => handler(event)} onChange={(event) => handler(event)}>
      { cards.map((conf, index) => <Card key={index} buttonId={index} type={conf.type} name={conf.name} value={conf.value} mode={mode}/>) }
      { mode === CardsMode.master ? <Card type={ CardType.creator } /> : ''}
      { mode === CardsMode.master &&  settingsMode === true ? <SettingsMode /> : ''} 
    </CardsContainer>
  )

function handler(event) {
  const id = event.target.id.replace(/[a-z]/ig, '');
  const type = event.target.id.replace(/[0-9]/g, '');
  console.log('HANDLER>>>>',type, 'ID>>>>', id );
  if (type === eventTypes.edit) { cardEditor(id) }
  if (type === eventTypes.cancel) { cancelEdit(id) }
  if (type === eventTypes.name) { name = event.target.value.slice(0, 12) }
  if (type === eventTypes.value) { value = event.target.value.slice(0, 4) }
  if (type === eventTypes.accept) { acceptEdit({id, name, value}) }
  if (type === eventTypes.delete) { cardDelete(id) }
  if (type === eventTypes.newCard) { openSetting() }
  if (type === eventTypes.closeSettings) { closeSetting() }
  if (type === eventTypes.addCardName) { name = event.target.value.slice(0, 12) }
  if (type === eventTypes.addCardValue) { value = event.target.value.slice(0, 4) }
  if (type === eventTypes.acceptSettings) { addCards([{type: typeCard, name, value, addCheck}]); closeSetting() }
  if (type === eventTypes.changeType) { typeCard = event.target.value.toLowerCase(); addCheck = true}
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
  }
}

export default connect (mapStatetoProps, mapDispatchToState)(Cards)