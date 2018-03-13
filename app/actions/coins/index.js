import { getTop100 } from 'services/api';
import { cleanCoins } from 'services/coinFactory';

// action types
export const GET_COINS = 'GET_COINS';
export const SET_COINS = 'SET_COINS';

// action creators
export function get(coins) {
  return {
    type: GET_COINS,
    coins
  };
}

export function set(coins) {
  return {
    type: SET_COINS,
    coins
  };
}

// actions
export const getCoins = () => dispatch => getTop100().then((res) => {
  const cleanedCoins = cleanCoins(res.data);
  dispatch(get(cleanedCoins));
});

export const setCoins = coins => (dispatch) => {
  dispatch(set(coins));
};
