// import * as R from 'ramda';
// import * as api from 'services/api';
// import { formatPriceUSD, zeroBalanceValue } from 'utils/modifiers';

// Portfolio constants
// const GET_COIN_PORTFOLIO = 'GET_COIN_PORTFOLIO';
export const ADD_COIN_PORTFOLIO = 'ADD_COIN_PORTFOLIO';
export const UPDATE_COIN_BALANCE = 'UPDATE_COIN_BALANCE';
export const REMOVE_COIN_PORTFOLIO = 'REMOVE_COIN_PORTFOLIO';

// action creators
export function add(coin) {
  return {
    type: ADD_COIN_PORTFOLIO,
    coin
  };
}

export function remove(coin) {
  return {
    type: REMOVE_COIN_PORTFOLIO,
    coin
  };
}

export function update(coin) {
  return {
    type: UPDATE_COIN_BALANCE,
    coin
  };
}

// actions
// export function addCoin(coin) {
//   return dispatch =>
//     api.getCoin(coin.id)
//       .then(res => R.head(res.data))
//       .then(remoteCoin => zeroBalanceValue(remoteCoin))
//       .then(remoteCoin => formatPriceUSD(remoteCoin))
//       .then(remoteCoin => dispatch(add(remoteCoin)));
// }
export function addCoin(coin) {
  return dispatch => dispatch(add(coin));
}

export function removeCoin(coin) {
  return dispatch => dispatch(remove(coin));
}

export function updateCoin(coin) {
  return dispatch => dispatch(update(coin));
}
