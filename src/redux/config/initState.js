import { CardType } from '../../components/cards/constants';

export const initState = {
  cards: {
    cardsSet: [
      {
        type: CardType.playCard,
        name: 'SP',
        value: '12',
      },
      {
        type: CardType.rest,
        name: 'take a rest',
        value: CardType.rest, 
      }
    ],
    settingsMode: false,
  }, 
}