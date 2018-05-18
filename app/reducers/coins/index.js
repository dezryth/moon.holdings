/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */

// Actions
import {
  GET_COINS,
  ADD_COINS,
  ADD_COIN,
  REMOVE_COIN,
  UPDATE_COIN
} from 'actions/coins';

// Utils
import { calculatePercentage } from 'utils/portfolio';
import { arrayToObject } from 'utils/modifiers';

const { localStorage } = window;

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

    case ADD_COINS:
      const { coins } = action;
      return {
        ...state,
        portfolio: coins
      };

    case ADD_COIN:
      const { coin } = action;
      const { portfolio } = state;
      const newPortfolio = calculatePercentage(portfolio, coin);
      const moonPortfolio = arrayToObject(newPortfolio);
      localStorage.setItem('moonPortfolio', JSON.stringify(moonPortfolio));

      return {
        ...state,
        portfolio: newPortfolio
      };

    case REMOVE_COIN:
      const filteredPortfolio = state.portfolio.filter(c => c !== action.coin);
      const lighterPortfolio = calculatePercentage(filteredPortfolio);
      localStorage.setItem('moonPortfolio', JSON.stringify(lighterPortfolio));

      return {
        ...state,
        portfolio: lighterPortfolio
      };

    case UPDATE_COIN:
      const found = state.portfolio.find(c => c.id === action.coin.id);

      const mappedPortfolio = state.portfolio.map((c) => {
        if (c.id === found.id) {
          return Object.assign({}, found);
        }

        return c;
      });

      const updatedPortfolio = calculatePercentage(mappedPortfolio);

      localStorage.setItem('moonPortfolio', JSON.stringify(updatedPortfolio));

      return {
        ...state,
        portfolio: calculatePercentage(updatedPortfolio)
      };

    default:
      return state;
  }
};
