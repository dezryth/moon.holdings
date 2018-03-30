import { getTop100 } from 'services/api';
import { cleanCoins } from 'services/coinFactory';

// action types
export const GET_COINS = 'GET_COINS';
export const ADD_COIN = 'ADD_COIN';
export const REMOVE_COIN = 'REMOVE_COIN';
export const UPDATE_COIN = 'UPDATE_COIN';

// action creators
export function get(coins) {
  return {
    type: GET_COINS,
    coins
  };
}

export function add(coin) {
  return {
    type: ADD_COIN,
    coin
  };
}

export function remove(coin) {
  return {
    type: REMOVE_COIN,
    coin
  };
}

export function update(coin) {
  return {
    type: UPDATE_COIN,
    coin
  };
}

// action dispatchers
export const getCoins = () => dispatch => getTop100().then((res) => {
  const cleanedCoins = cleanCoins(res.data);
  dispatch(get(cleanedCoins));
});

export const addCoin = coin => (dispatch) => {
  dispatch(add(coin));
};

export const removeCoin = coin => (dispatch) => {
  dispatch(remove(coin));
};

export const updateCoin = coin => (dispatch) => {
  dispatch(update(coin));
};
