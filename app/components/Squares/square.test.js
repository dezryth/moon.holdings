import { testCommonComponentAttrs } from '../../utils/tests';

import Square from './square';

const coin = {
  id: 'bitcoin',
  symbol: 'BTC',
  price_usd: '0',
  balance: '0'
};

const calculateBalance = jest.fn();
const setStyle = jest.fn();

describe('<Square /> component', () => {
  testCommonComponentAttrs(Square, {
    coin,
    setStyle,
    calculateBalance
  });
});
