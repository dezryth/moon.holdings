// Internal functions
const floor = num => (Math.floor(num * 100) / 100);

// Exported
export const round = value => Math.round((value) * 100) / 100;

export const multiply = (num1, num2) => num1 * num2;

export const rounder = (balance, priceUsd) => round(multiply(balance, floor(priceUsd)));

export const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const calcTotal = (assets) => {
  const values = assets.map(asset => asset.value);
  const total = values.reduce((sum, value) => sum + value, 0);
  return numberWithCommas(floor(total));
};

export const calculateBalance = coin => numberWithCommas(floor(coin.balance * coin.price_usd));

export const getCoinValue = coin => coin.value;

export const portfolioBalance = coins =>
  numberWithCommas(floor(coins.reduce((val, coin) => (val + +(coin.value)), 0)));
