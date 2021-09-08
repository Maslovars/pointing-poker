import { CardImage, StyledCard } from './styles';
import { type } from './constants';
import plus from '../../assets/add-card.png';
import cup from '../../assets/cup-card.png';

export function Card(props) {
  return (
    <StyledCard { ...props }>
      { props.type === type.rest ? <CardImage src={ cup } alt=''/> : '' }
      { props.type === type.creator ? <CardImage src={ plus } alt=''/> : '' }
    </StyledCard>
  )
}