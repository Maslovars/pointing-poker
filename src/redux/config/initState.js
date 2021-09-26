/* eslint-disable */

import { CardType } from '../../components/cards/constants';

export const initState = {
  users: [],
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
    lowSet: [],
    middleSet: [],
    hightSet: [],
    issuesSet: []
  },
  gameSettings: {
    isPlayer: true,
    changingCard: false,
    autoEntrance: true,
    changingDecision: false,
    isTimer: false,
    scoreType: "story points",
    scoreTypeShort: 'SP',
    minutes: "",
    seconds: ""
  }
}