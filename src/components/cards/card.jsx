import { 
  CardImage,
  StyledCard,
  BottomName,
  Value,
  TopName,
  CardButton,
  CardInput,
  CardLabel,
  ButtonContainer,
  StyledButton,
  DeleteButton,
} from './styles';
import { CardsMode, CardType, eventTypes } from './constants';
import plus from '../../assets/add-card.png';
import cup from '../../assets/cup-card.png';
import pencil from '../../assets/edit-card.png';
import accept from '../../assets/accept-card.png';
import cancel from '../../assets/cancel-card.png';

export function Card(props) {
  const { name, value, type, mode, buttonId } = props;
  if (type === CardType.creator) { return <StyledCard {...props}><CardImage id={eventTypes.newCard} src={ plus } alt=''/></StyledCard> } 
  if (type === CardType.edit && mode === CardsMode.master) {
    const card = <StyledCard>
      <CardLabel>Name:
        <CardInput id={buttonId + eventTypes.name} type='text' placeholder={name} />
      </CardLabel> 
      <CardLabel>Value:
        <CardInput id={buttonId + eventTypes.value} type='text' placeholder={value} />
      </CardLabel>
      <ButtonContainer>
        <StyledButton id={buttonId + eventTypes.accept} type='image' src={accept} />
        <StyledButton id={buttonId + eventTypes.cancel} type='image' src={cancel} />
      </ButtonContainer>
    </StyledCard>
    return card;
  }
  const card = <StyledCard>
    <TopName>{name}</TopName>
    { type === CardType.rest ? <CardImage src={ cup } alt=''/> : <Value>{value}</Value> } 
    <BottomName>{name}</BottomName>
    { mode && mode === CardsMode.master && type !== CardType.rest ? <CardButton id={buttonId + eventTypes.edit} type='image' src={pencil} /> : ''}
    { mode && mode === CardsMode.master ? <DeleteButton classNmae='delBttn' id={buttonId + eventTypes.delete} type='image' src={cancel} /> : ''}
  </StyledCard>;
  return card;
}

