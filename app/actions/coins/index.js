// Services
import { getTop100 } from 'services/api';
import { cleanCoins } from 'services/coinFactory';

// Utils
import { round } from 'utils/math';

// action types
export const GET_COINS = 'GET_COINS';
export const ADD_COIN = 'ADD_COIN';
export const ADD_COINS = 'ADD_COINS';
export const REMOVE_COIN = 'REMOVE_COIN';
export const UPDATE_COIN = 'UPDATE_COIN';

// action creators
export function get(coins) {
  return { type: GET_COINS, coins };
}

export function addAll(coins) {
  return { type: ADD_COINS, coins };
}

export function add(coin) {
  return { type: ADD_COIN, coin };
}

export function remove(coin) {
  return { type: REMOVE_COIN, coin };
}

export function update(coin) {
  return { type: UPDATE_COIN, coin };
}

// action dispatchers
export const getCoins = () => dispatch => getTop100().then((res) => {
  const cleanedCoins = cleanCoins(res.data);
  dispatch(get(cleanedCoins));
});

export const addCoins = coins => dispatch => getTop100().then((res) => {
  const cleanedCoins = cleanCoins(res.data);
  const storedNames = coins.map(c => c.name);
  const inPortfolio = cleanedCoins.filter(d => storedNames.indexOf(d.name) > -1);

  const updatedCoins = inPortfolio.map((p, i) => {
    const clonedCoin = Object.assign({}, p);
    clonedCoin.balance = coins[i].balance;
    clonedCoin.value = round(clonedCoin.balance * clonedCoin.price_usd);
    return clonedCoin;
  });

  dispatch(addAll(updatedCoins));
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
