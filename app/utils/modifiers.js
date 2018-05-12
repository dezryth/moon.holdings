/* eslint-disable no-param-reassign */
/* eslint-disable no-extend-native */
/* eslint-disable func-names */
/* eslint-disable no-useless-escape */

// Converts camelCase to snake-case
String.prototype.toDash = function () {
  return this.replace(/([A-Z])/g, $1 => `-${$1.toLowerCase()}`);
};

// Converts snake-case to camelCase
String.prototype.toCamel = function () {
  return this.replace(/(\-[a-z])/g, $1 => $1.toUpperCase().replace('-', ''));
};

export const formatPriceUSD = (coin) => {
  coin.price_usd = Number(coin.price_usd).toFixed(2);
  return coin;
};

export const zeroBalanceValue = (coin) => {
  coin.balance = 0;
  coin.value = 0;
  coin.percentage = 0;
  return coin;
};

export const setStyle = (id, style) => {
  switch (id) {
    case 'bitcoin-cash': return style[id.toCamel()];
    case '0x': return style.zrx;
    default: return style[id];
  }
};
