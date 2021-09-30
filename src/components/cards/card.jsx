import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
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
} from "./styles";
import { CardsMode, CardType, eventTypes } from "./constants";
import plus from "../../assets/add-card.png";
import cup from "../../assets/cup-card.png";
import pencil from "../../assets/edit-card.png";
import accept from "../../assets/accept-card.png";
import cancel from "../../assets/cancel-card.png";
import question from "../../assets/question-card.png";
import skip from "../../assets/skip-card.png";
import infinity from "../../assets/infinity-card.png";
import {
  deleteCard,
  selectCard,
  editCardCancel,
  editCardAccept,
  editCard,
} from "../../redux/actions/actions";

export default function Card(props) {
  const dispath = useDispatch();
  const { name, value, type, mode, buttonId, selected, handler, additionalHandler } = props;
  const cardSample = { value: "", name: "" };

  function getImage(typeCard) {
    if (typeCard === CardType.rest) {
      return <CardImage src={cup} alt="" />;
    }
    if (typeCard === CardType.question) {
      return <CardImage src={question} alt="" />;
    }
    if (typeCard === CardType.skip) {
      return <CardImage src={skip} alt="" />;
    }
    if (typeCard === CardType.infinity) {
      return <CardImage src={infinity} alt="" />;
    }
    return <Value>{value}</Value>;
  }

  if (type === CardType.creator) {
    return (
      <StyledCard type={type}>
        <CardImage pointer src={plus} alt="" onClick={() => handler(true)} />
      </StyledCard>
    );
  }
  if (type === CardType.edit && mode === CardsMode.master) {
    const card = (
      <StyledCard>
        <CardLabel>
          Name:
          <CardInput
            type="text"
            placeholder={name}
            onChange={(event) => {
              cardSample.name = event.target.value.slice(0, 6);
              return undefined;
            }}
          />
        </CardLabel>
        <CardLabel>
          Value:
          <CardInput
            type="text"
            placeholder={value}
            onChange={(event) => {
              cardSample.value = event.target.value.slice(0, 4);
              return undefined;
            }}
          />
        </CardLabel>
        <ButtonContainer>
          <StyledButton
            id={buttonId + eventTypes.accept}
            type="image"
            src={accept}
            onClick={(event) =>
              dispath(
                editCardAccept({
                  id: event.target.id.replace(/\D/g, ""),
                  ...cardSample,
                })
              )
            }
          />
          <StyledButton
            id={buttonId + eventTypes.cancel}
            type="image"
            src={cancel}
            onClick={(event) =>
              dispath(editCardCancel(event.target.id.replace(/\D/g, "")))
            }
          />
        </ButtonContainer>
      </StyledCard>
    );
    return card;
  }
  const card = (
    <StyledCard>
      <TopName>{name}</TopName>
      {getImage(type)}
      <BottomName>{name}</BottomName>
      {mode && mode === CardsMode.master && !CardType[type] ? (
        <CardButton
          id={buttonId + eventTypes.edit}
          type="image"
          src={pencil}
          onClick={(event) =>
            dispath(editCard(event.target.id.replace(/\D/g, "")))
          }
        />
      ) : (
        ""
      )}
      {mode && mode === CardsMode.master ? (
        <DeleteButton
          id={buttonId + eventTypes.delete}
          type="image"
          src={cancel}
          onClick={(event) =>
            dispath(deleteCard(event.target.id.replace(/\D/g, "")))
          }
        />
      ) : (
        ""
      )}
      {(!mode || mode === CardsMode.player) && !selected ? (
        <Glass
          id={buttonId + eventTypes.selectCard}
          onClick={(event) => {
            dispath(selectCard(event.target.id.replace(/\D/g, "")));
            { additionalHandler && additionalHandler(event.target.id.replace(/\D/g, "")) }
          }
          }
        />
      ) : (
        ""
      )}
      {(!mode || mode === CardsMode.player) && selected ? (
        <Glass
          id={buttonId + eventTypes.selectCard}
          selected
          onClick={(event) => {
            dispath(selectCard(event.target.id.replace(/\D/g, "")));
            { additionalHandler && additionalHandler(event.target.id.replace(/\D/g, "")) }
          }
        }
        />
      ) : (
        ""
      )}
    </StyledCard>
  );
  return card;
}

Card.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  mode: PropTypes.string,
  buttonId: PropTypes.number,
  selected: PropTypes.bool,
  handler: PropTypes.func,
  additionalHandler: PropTypes.func,
};

Card.defaultProps = {
  name: "",
  value: "",
  type: "",
  mode: "",
  buttonId: 0,
  selected: false,
  handler: () => undefined,
  additionalHandler: null,
};
