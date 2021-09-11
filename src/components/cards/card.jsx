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
  Glass,
} from './styles';
import { CardsMode, CardType, eventTypes } from './constants';
import plus from '../../assets/add-card.png';
import cup from '../../assets/cup-card.png';
import pencil from '../../assets/edit-card.png';
import accept from '../../assets/accept-card.png';
import cancel from '../../assets/cancel-card.png';
import question from '../../assets/question-card.png';
import skip from '../../assets/skip-card.png';
import infinity from '../../assets/infinity-card.png';

export function Card(props) {
  const { name, value, type, mode, buttonId, selected } = props;
  if (type === CardType.creator) { return <StyledCard  {...props}><CardImage pointer id={eventTypes.newCard} src={ plus } alt=''/></StyledCard> } 
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
    { type === CardType.rest ? <CardImage src={ cup } alt=''/> : 
      type === CardType.skip ? <CardImage src={ skip } alt=''/> :
      type === CardType.infinity ? <CardImage src={ infinity } alt=''/> : 
      type === CardType.question ? <CardImage src={ question } alt=''/> : <Value>{value}</Value> }   
    <BottomName>{name}</BottomName>
    { mode && mode === CardsMode.master && !CardType.hasOwnProperty(type) ? <CardButton id={buttonId + eventTypes.edit} type='image' src={pencil} /> : ''}
    { mode && mode === CardsMode.master ? <DeleteButton classNmae='delBttn' id={buttonId + eventTypes.delete} type='image' src={cancel} /> : ''}
    { (!mode || mode === CardsMode.player) && !selected ? <Glass className={selected} id={buttonId + eventTypes.selectCard} /> : '' }
    { (!mode || mode === CardsMode.player) && selected ? <Glass className={selected} selected id={buttonId + eventTypes.selectCard}/> : '' }
  </StyledCard>;
  return card;
}

