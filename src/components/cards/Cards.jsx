import { CardsContainer } from "./styles"
import { Card } from './card'
import { mode, type } from './constants';
import { connect } from 'react-redux';

function Cards(props) {
  const { cards } = props;
  return ( 
    <CardsContainer>
      { cards.map((conf, index) => <Card key={index} type={conf.type} name={conf.name} value={conf.value}/>) }
      { props.mode === mode.master ? <Card type={ type.creator } /> : ''}
    </CardsContainer>
  )
} 

function mapStatetoProps(state) {
  return { cards: state.appState.cards.cardsSet }
}

export default connect (mapStatetoProps)(Cards)