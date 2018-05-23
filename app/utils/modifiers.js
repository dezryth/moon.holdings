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

// Add style to coin square
export const setStyle = (id) => {
  switch (id) {
    case 'all-sports': return style.basicattentiontoken;
    case 'basic-attention-token': return style.basicattentiontoken;
    case 'bitcoin-cash': return style[id.toCamel()];
    case 'bibox-token': return style[id.toCamel()];
    case 'deepbrain-chain': return style[id.toCamel()];
    case 'golem-network-tokens': return style[id.toCamel()];
    case 'gnosis-gno': return style[id.toCamel()];
    case 'enjin-coin': return style[id.toCamel()];
    case 'matrix-ai-network': return style[id.toCamel()];
    case 'theta-token': return style[id.toCamel()];
    // case '0x': return style.zrx;
    default: return style[id];
  }
};

// Check it coin has darkBg
export const coinHasDarkBg = id => style[id.toCamel()].darkBg;

// Check it coin has lightBg
export const coinHasLightBg = id => style[id.toCamel()].lightBg;

// Convert Array to Object
export const arrayToObject = array =>
  array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
