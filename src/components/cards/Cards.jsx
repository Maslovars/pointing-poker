import React, { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { CardsContainer } from "./styles";
import Card from "./card";
import { CardsMode, CardType } from "./constants";
import SettingsMode from "./settingsMode/settingsMode";

export default function Cards(props) {
  const [settingsMode, setSettingsMode] = useState(false);
  const cards = useSelector((state) => state.appState.cards.cardsSet);
  const { mode } = props;
  let key = 0;

  return (
    <CardsContainer>
      {cards.map((conf, index) => {
        key += 1;
        return (
          <Card
            key={key}
            buttonId={index}
            type={conf.type}
            name={conf.name}
            value={conf.value}
            selected={conf.selected}
            mode={mode}
          />
        );
      })}
      {mode === CardsMode.master ? (
        <Card type={CardType.creator} handler={setSettingsMode} />
      ) : (
        ""
      )}
      {mode === CardsMode.master && settingsMode === true ? (
        <SettingsMode closeHandler={setSettingsMode} />
      ) : (
        ""
      )}
    </CardsContainer>
  );
}

Cards.propTypes = {
  mode: PropTypes.string.isRequired,
};
