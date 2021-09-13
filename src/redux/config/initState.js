/* eslint-disable */

import { CardType } from '../../components/cards/constants';

export const initState = {
  cards: {
    cardsSet: [
      {
        type: CardType.rest,
        name: 'take a rest',
        value: CardType.rest,
        selected: false, 
      }
    ],
    cardEditMode: false,
    value: '',
  }, 
  issues: {
    issuesSet: []
  }
}