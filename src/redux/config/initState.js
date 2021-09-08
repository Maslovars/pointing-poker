import { type } from '../../components/cards/constants';

export const initState = {
  cards: {
    cardsSet: [
      {
        type: type.playCard,
        name: 'SP',
        value: '12',
      },
      {
        type: type.rest,
      }
    ]
  }, 
}