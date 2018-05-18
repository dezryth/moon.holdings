/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */

// Actions
import {
  GET_COINS,
  ADD_COIN,
  REMOVE_COIN,
  UPDATE_COIN
} from 'actions/coins';

// Utils
import { calculatePercentage } from 'utils/portfolio';

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
      const { coin } = action;
      const { portfolio } = state;
      return {
        ...state,
        portfolio: calculatePercentage(portfolio, coin)
        // portfolio: [...portfolio, coin]
      };

    case REMOVE_COIN:
      return {
        ...state,
        portfolio: state.portfolio.filter(c => c !== action.coin)
      };

    case UPDATE_COIN:
      const found = state.portfolio.find(c => c.id === action.coin.id);

      const updatedPortfolio = state.portfolio.map((c) => {
        if (c.id === found.id) {
          return Object.assign({}, found);
        }

        return c;
      });

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
