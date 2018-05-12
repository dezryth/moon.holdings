/* eslint-disable no-param-reassign */
/* eslint-disable no-extend-native */
/* eslint-disable func-names */
/* eslint-disable no-useless-escape */

// Styles
import * as style from 'styles/coins';

// Converts snake-case to camelCase
String.prototype.toCamel = function () {
  return this.replace(/(\-[a-z])/g, $1 => $1.toUpperCase().replace('-', ''));
};

export const formatPriceUSD = (coin) => {
  coin.price_usd = Number(coin.price_usd).toFixed(2);
  return coin;
};

export const zeroBalanceValue = coin =>
  Object.assign({
    balance: 0,
    value: 0,
    percentage: 0
  }, coin);

export const setStyle = (id) => {
  switch (id) {
    case 'bitcoin-cash': return style[id.toCamel()];
    case '0x': return style.zrx;
    default: return style[id];
  }
};
