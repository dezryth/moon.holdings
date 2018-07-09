import { testCommonComponentAttrs } from 'utils/tests';

import Square from './square';

const coin = {
  id: 'bitcoin',
  symbol: 'BTC',
  price_usd: '0',
  balance: '0',
  percent_change_24h: '-10%'
};

describe('<Square /> component', () => {
  testCommonComponentAttrs(Square, {
    coin
  });
});
