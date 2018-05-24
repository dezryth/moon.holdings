/* eslint-disable no-param-reassign */
import * as R from 'ramda';

const textMatch = (part, str) => str.search(part) !== -1;

// Return coins that match text | search by name & symbol.
export const findCoins = (txt, coins) => {
  const checkText = (k, c) => (textMatch(txt, c[k].toLowerCase()) ? c : null);

  const curriedCheckText = R.curry(checkText);
  const byName = R.map(curriedCheckText('name'), coins);
  const bySymbol = R.map(curriedCheckText('symbol'), coins);
  const matchNames = R.reject(R.isNil, byName);
  const matchSymbols = R.reject(R.isNil, bySymbol);
  const combinedSearch = (matchNames.concat(matchSymbols));

  return R.uniq(combinedSearch);
};

const keysToClean = [
  'available_supply',
  'last_updated',
  'market_cap_usd',
  'max_supply',
  'price_btc',
  'total_supply'
];

// Clean Coins by removing unneeded keys
export const cleanCoins = coins =>
  // Return our mapped coins array.
  coins.map(coin =>
    // Iterate through each key in the object and create a new object (reduce).
    Object.keys(coin).reduce((newObj, key) => (
      // Check to see if this key is inside keysToClean.
      keysToClean.indexOf(key) < 0
      // If not, add it to the new object.
        ? ({ ...newObj, [key]: coin[key] })
        // Otherwise, ignore the key and move on
        // so that its not in our new object anymore.
        : newObj
    ), {}));

// Change coin keys
export const changeCoins = coins =>
  coins.map((coin) => {
    if (coin.id === '0x') {
      coin.id = 'zrx';
      coin.name = 'zrx';
    }
    return coin;
  });
