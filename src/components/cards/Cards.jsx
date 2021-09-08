import { CardsContainer } from "./styles"
import { Card } from './card'
import { mode, type } from './constants'

export default function Cards(props) {
  return ( 
  <CardsContainer>
    { props.mode === mode.master || mode.player ? <Card type={ type.rest } /> : ''}
    { props.mode === mode.master ? <Card type={ type.creator } /> : ''}
  </CardsContainer>
  )
} 