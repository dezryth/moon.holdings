import { testCommonComponentAttrs } from 'utils/tests';

import Portfolio from './portfolio';

const coins = [];

describe('<Portfolio /> component', () => {
  testCommonComponentAttrs(Portfolio, {
    coins
  });
});
