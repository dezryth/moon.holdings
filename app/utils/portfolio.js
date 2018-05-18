/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */

// Libs
import * as R from 'ramda';

// Utils
import { round } from 'utils/math';

const { localStorage } = window;

// Convert Array to Object
const arrayToObject = array =>
  array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});

// Add coin's percentage of portfolio
export const calculatePercentage = (portfolio, coin) => {
  portfolio.push(coin);

  const addValue = c => c.value;
  const values = R.chain(addValue, portfolio);
  const total = values.reduce((acc, val) => acc + val);

  const updatedPortfolio = portfolio.map((c) => {
    c.percentage = round((c.value / total) * 100);
    return c;
  });

  const moonPortfolio = arrayToObject(updatedPortfolio);

  localStorage.setItem('moonPortfolio', JSON.stringify(moonPortfolio));

  return updatedPortfolio;
};
