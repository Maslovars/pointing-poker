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
import { useDispatch } from 'react-redux';
import { deleteCard, selectCard, editCardCancel, editCardAccept, editCard  } from '../../redux/actions/actions';

export function Card(props) {

  const dispath = useDispatch();
  const { name, value, type, mode, buttonId, selected } = props;
  const cardSample = {value: '', name: ''};
  if (type === CardType.creator) { return <StyledCard  {...props}><CardImage pointer src={ plus } alt=''/></StyledCard> } 
  if (type === CardType.edit && mode === CardsMode.master) {
    const card = <StyledCard>
      <CardLabel>Name:
        <CardInput type='text' placeholder={name} onChange={(event) => cardSample.name = event.target.value.slice(0, 6)} />
      </CardLabel> 
      <CardLabel>Value:
        <CardInput type='text' placeholder={value} onChange={(event) => cardSample.value = event.target.value.slice(0, 4)} />
      </CardLabel>
      <ButtonContainer>
        <StyledButton id={buttonId + eventTypes.accept} type='image' src={accept} onClick={(event) => dispath(editCardAccept({ id: event.target.id.replace(/\D/g, ''), ...cardSample }))} />
        <StyledButton id={buttonId + eventTypes.cancel} type='image' src={cancel} onClick={(event) => dispath(editCardCancel(event.target.id.replace(/\D/g, '')))} />
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
    { mode && mode === CardsMode.master && !CardType.hasOwnProperty(type) ? <CardButton id={buttonId + eventTypes.edit} type='image' src={pencil} onClick={(event) => dispath(editCard(event.target.id.replace(/\D/g, '')))} /> : ''}
    { mode && mode === CardsMode.master ? <DeleteButton id={buttonId + eventTypes.delete} type='image' src={cancel} onClick={(event) => dispath(deleteCard(event.target.id.replace(/\D/g, '')))} /> : ''}
    { (!mode || mode === CardsMode.player) && !selected ? <Glass id={buttonId + eventTypes.selectCard} onClick={(event) => dispath(selectCard(event.target.id.replace(/\D/g, '')))} /> : '' }
    { (!mode || mode === CardsMode.player) && selected ? <Glass id={buttonId + eventTypes.selectCard} selected onClick={(event) => dispath(selectCard(event.target.id.replace(/\D/g, '')))} /> : '' }
  </StyledCard>;
  return card;
}



