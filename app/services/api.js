/* eslint-disable no-console */
import axios from 'axios';

// const top200 = 'https://api.coinmarketcap.com/v1/ticker/';
const top = num => `https://api.coinmarketcap.com/v1/ticker/?start=0&limit=${num}`;
const coinTicker = coinId => `https://api.coinmarketcap.com/v1/ticker/${coinId}/`;

const log = (method, err) => {
  console.warn(`%c${method}`, 'background: #393939; color: #F25A43', err);
  return err;
};

// export const getAllCoins = () => axios.get(top1000)
//   .catch(err => log('api.getAllCoins', err))
//   .then(res => res);

export const getTop = count =>
  axios
    .get(top(count))
    .catch(err => log('api.getAllCoins', err))
    .then(res => res);

export const getCoin = coinId =>
  axios
    .get(coinTicker(coinId))
    .catch(err => log('api.getCoin', err))
    .then(res => res);
