/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */

// Libs
import * as R from 'ramda';

// Utils
import { round } from 'utils/math';

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

  return updatedPortfolio;
};
