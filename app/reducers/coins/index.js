/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */

import { GET_COINS } from 'actions/coins';

const initialState = {
  all: [],
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

    default:
      return state;
  }
};
