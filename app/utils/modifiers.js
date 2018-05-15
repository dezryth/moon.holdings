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

export const zeroBalanceValue = (coin) => {
  const cloned = Object.assign({}, coin);
  cloned.balance = 0;
  cloned.value = 0;
  cloned.percentage = 0;
  return cloned;
};

export const setStyle = (id) => {
  switch (id) {
    case 'bitcoin-cash': return style[id.toCamel()];
    case '0x': return style.zrx;
    default: return style[id];
  }
};
