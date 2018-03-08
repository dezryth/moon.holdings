/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */

import { GET_COINS } from 'actions/coins';

const initialState = {
  coin: [],
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state,
        coin: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
