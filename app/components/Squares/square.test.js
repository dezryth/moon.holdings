import { testCommonComponentAttrs } from 'utils/tests';

import Square from './square';

const coin = {
  id: 'bitcoin',
  symbol: 'BTC',
  price_usd: '0',
  balance: '0'
};

describe('<Square /> component', () => {
  testCommonComponentAttrs(Square, {
    coin
  });
});
