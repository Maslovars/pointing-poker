import { CardImage, StyledCard, BottomName, Value, TopName } from './styles';
import { type } from './constants';
import plus from '../../assets/add-card.png';
import cup from '../../assets/cup-card.png';

export function Card(props) {
  const { name, value } = props;
  
  { if (props.type === type.rest) { return <StyledCard><CardImage src={ cup } alt=''/></StyledCard> } }
  { if (props.type === type.creator) { return <StyledCard {...props}><CardImage src={ plus } alt=''/></StyledCard> } }
  
  const card = <StyledCard>
    <TopName>{ name }</TopName>
    <Value>{ value }</Value>
    <BottomName>{ name }</BottomName>
  </StyledCard>
  
  return card;
}