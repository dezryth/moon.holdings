/* eslint-disable no-param-reassign */
/* eslint-disable no-extend-native */
/* eslint-disable func-names */
/* eslint-disable no-useless-escape */
import * as R from 'ramda';

// Styles
import * as style from 'styles/coins';

// Converts snake-case to camelCase.
String.prototype.toCamel = function () {
  return this.replace(/(\-[a-z])/g, $1 => $1.toUpperCase().replace('-', ''));
};

// Add style to coin square.
export const setStyle = (id) => {
  switch (id) {
    case 'all-sports': return style.basicattentiontoken;
    case 'basic-attention-token': return style.basicattentiontoken;
    case 'binance-coin':
    case 'bitcoin-cash':
    case 'bibox-token':
    case 'ethereum-classic':
    case 'deepbrain-chain':
    case 'golem-network-tokens':
    case 'gnosis-gno':
    case 'enjin-coin':
    case 'kucoin-shares':
    case 'kyber-network':
    case 'matrix-ai-network':
    case 'theta-token': return style[id.toCamel()];
    case '0x': return style.zrx;
    default: return style[id];
  }
};

// Check it coin has darkBg.
export const coinHasDarkBg = id =>
  (R.isNil(style[id.toCamel()]) ? false : style[id.toCamel()].darkBg);

// To handle special cases.
const coinIdChecker = (id) => {
  switch (id) {
    case '0x': return 'zrx';
    default: return id;
  }
};

// Check it coin has lightBg.
export const coinHasLightBg = (id) => {
  const coinId = coinIdChecker(id);
  return (R.isNil(style[coinId.toCamel()]) ? false : style[coinId.toCamel()].lightBg);
};

// Convert Array to Object.
export const arrayToObject = array =>
  array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});

const coinBg = () => 'coin-square bg';

// Add special Coin style.
export const classModifier = (coinId) => {
  switch (coinId) {
    case 'bitcoin': return `${coinBg()} bg-btc`;
    case 'ethereum': return `${coinBg()} bg-eth`;
    case 'eos': return `${coinBg()} bg-eos`;
    case 'lisk': return `${coinBg()} bg-lsk`;
    case 'neo': return `${coinBg()} bg-neo`;
    case 'zencash': return `${coinBg()} bg-zen`;
    default: // no defualt
  }
  return 'coin-square';
};

export const styleModifier = coinId => (coinHasDarkBg(coinId) ? `col ${classModifier(coinId)} dark-bg` : `col ${classModifier(coinId)} coin-square`);
