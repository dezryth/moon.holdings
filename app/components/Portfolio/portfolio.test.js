import React from 'react';
import { shuffle } from 'lodash';
import { shallow } from 'enzyme';
import { testCommonComponentAttrs } from 'utils/tests';
import { calculateBalance } from 'utils/math';

import Square from 'components/Squares/square';
import Portfolio from './portfolio';

const coins = [];

describe('<Portfolio /> component', () => {
  testCommonComponentAttrs(Portfolio, {
    coins
  });
});

describe('sort portfolio squares by largest value', () => {
  const coin = shuffle([
    {
      balance: '100',
      value: 27,
      id: 'cardano',
      name: 'Cardano',
      symbol: 'ADA',
      rank: '7',
      price_usd: '1',
      '24h_volume_usd': '154609000.0',
      percent_change_1h: '-0.62',
      percent_change_24h: '-3.0',
      percent_change_7d: '-19.79'
    },
    {
      balance: '200',
      value: 3489560,
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      rank: '1',
      price_usd: '1',
      '24h_volume_usd': '7343460000.0',
      percent_change_1h: '-0.17',
      percent_change_24h: '0.42',
      percent_change_7d: '-7.22'
    },
    {
      balance: '300',
      value: 64221,
      id: 'monero',
      name: 'Monero',
      symbol: 'XMR',
      rank: '12',
      price_usd: '1',
      '24h_volume_usd': '56552600.0',
      percent_change_1h: '-0.08',
      percent_change_24h: '3.7',
      percent_change_7d: '-8.14'
    }
  ]);

  test('squares are sorted in order', () => {
    const wrapper = shallow(<Portfolio coins={coin} />);
    const squares = wrapper.find(Square);
    expect(squares).toHaveLength(3);

    const cs = squares.map(square => square.props());
    expect(cs.map(calculateBalance)).toEqual(['100', '200', '300']);
  });
});
