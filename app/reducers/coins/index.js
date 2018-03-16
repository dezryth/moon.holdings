/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */

import {
  GET_COINS,
  ADD_COIN,
  REMOVE_COIN
} from 'actions/coins';

const initialState = {
  all: [],
  portfolio: [],
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state,
        all: action.coins,
        loading: false
      };

    case ADD_COIN:
      return {
        ...state,
        portfolio: [...state.portfolio, action.coin]
      };

    case REMOVE_COIN:
      return {
        ...state,
        portfolio: state.portfolio.filter(c => c !== action.coin)
      };

    default:
      return state;
  }
};
