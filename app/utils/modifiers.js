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
    case 'power-ledger': return style.powerledger;
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
    case 'bitcoin-cash': return `${coinBg()} bg-bch`;
    case 'binance-coin': return `${coinBg()} bg-bnb`;
    case 'cardano': return `${coinBg()} bg-ada`;
    case 'decred': return `${coinBg()} bg-dcr`;
    case 'district0x': return `${coinBg()} bg-dnt`;
    case 'ethereum': return `${coinBg()} bg-eth`;
    case 'eos': return `${coinBg()} bg-eos`;
    case 'golem-network-tokens': return `${coinBg()} bg-gnt`;
    case 'lisk': return `${coinBg()} bg-lsk`;
    case 'maker': return `${coinBg()} bg-mkr`;
    case 'nano': return `${coinBg()} bg-nano bg-lite`;
    case 'neo':
    case 'gas': return `${coinBg()} bg-neo`;
    case 'spankchain': return `${coinBg()} bg-spank`;
    case 'sonm': return `${coinBg()} bg-snm`;
    case 'stellar': return `${coinBg()} bg-xlm bg-lite`;
    case 'vechain': return `${coinBg()} bg-ven`;
    case 'zencash': return `${coinBg()} bg-zen`;
    case '0x': return `${coinBg()} bg-zrx`;
    default: // no defualt
  }
  return 'coin-square';
};

// Applies specific coin style.
export const styleModifier = coinId => (coinHasDarkBg(coinId) ? `col ${classModifier(coinId)} dark-bg` : `col ${classModifier(coinId)} coin-square`);

// Adds either green or red class to 24 percent change.
export const percentStyler = ({ percent_change_24h: change24 }) => {
  const firstChar = change24.charAt(0);
  return firstChar === '-' ? 'red' : 'green';
};
