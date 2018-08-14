import { testCommonComponentAttrs } from 'utils/tests';

import Square from './square';

const mockProps = {
  coin: {
    id: 'bitcoin',
    symbol: 'BTC',
    price_usd: '0',
    balance: '0',
    value: '1',
    percent_change_24h: '-10%'
  },
  edit: jest.fn(),
  index: 1
};

describe('<Square /> component', () => {
  testCommonComponentAttrs(Square, mockProps);
});
