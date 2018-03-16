/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
import {
  ADD_COIN_PORTFOLIO,
  UPDATE_COIN_BALANCE,
  REMOVE_COIN_PORTFOLIO
} from 'actions/coins';

export const initialState = {
  portfolio: []
};

const removeCoin = (coin, { portfolio }) => {
  const filtered = portfolio.filter(item => item.name !== coin);
  return filtered;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COIN_PORTFOLIO:
      return {
        ...state,
        // portfolio: action.payload
        portfolio: state.portfolio.concat(action.coin)
      };

    case REMOVE_COIN_PORTFOLIO:
      return removeCoin(action.coin, state);

    case UPDATE_COIN_BALANCE:
      const values = state.map(coin => coin.value);
      const total = values.reduce((x, y) => x + y);

      return state.map((coin) => {
        coin.percentage = (coin.value / (total * 100));
        if (coin.id === action.coin.id) {
          coin.value = action.coin.value;
          return coin;
        }
        return coin;
      });

    default:
      return state;
  }
};
