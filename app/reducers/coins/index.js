/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */

import {
  GET_COINS,
  ADD_COIN,
  REMOVE_COIN,
  UPDATE_COIN
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
      console.log('ADD_COIN');
      return {
        ...state,
        portfolio: [...state.portfolio, action.coin]
      };

    case REMOVE_COIN:
      return {
        ...state,
        portfolio: state.portfolio.filter(c => c !== action.coin)
      };

    case UPDATE_COIN:
      console.log('UPDATE_COIN');
      const found = state.portfolio.find(c => c.id === action.coin.id);
      console.log(' found', found);

      const updatedPortfolio = state.portfolio.forEach((c) => {
        if (c.id === action.coin.id) {
          c = Object.assign({}, action.coin);
          return c;
        }

        return c;
      });

      console.log(' updatedPortfolio', updatedPortfolio);

      return {
        ...state,
        portfolio: updatedPortfolio
      };

    // case UPDATE_COIN_BALANCE:
    //   const values = state.map(coin => coin.value);
    //   const total = values.reduce((x, y) => x + y);
    //
    //   return state.map((coin) => {
    //     coin.percentage = (coin.value / (total * 100));
    //     if (coin.id === action.coin.id) {
    //       coin.value = action.coin.value;
    //       return coin;
    //     }
    //     return coin;
    //   });

    default:
      return state;
  }
};
