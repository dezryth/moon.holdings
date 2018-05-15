import { testCommonComponentAttrs } from '../../utils/tests';

import { SquareEditJest } from './squareEdit';

const coin = {
  id: 'btc',
  symbol: 'bitcoin',
  balance: 0,
  price_usd: '1'
};

const coins = {
  all: [coin],
  portfolio: []
};

const props = {
  coins,
  coin,
  addCoin: jest.fn(),
  updateCoin: jest.fn(),
  removeCoin: jest.fn()
};

describe('<SquareEditJest /> component', () => {
  testCommonComponentAttrs(SquareEditJest, { ...props });
});
