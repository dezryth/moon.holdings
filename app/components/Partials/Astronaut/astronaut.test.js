import {
  getComponentWrapper,
  testCommonComponentAttrs
} from 'utils/tests';

import Astronaut from './astronaut';

describe('<Astronaut /> component', () => {
  testCommonComponentAttrs(Astronaut);

  it('should contain a section with id astronaut', () => {
    const wrapper = getComponentWrapper(Astronaut);
    expect(wrapper.find('section#astronaut')).toBeDefined();
  });
});
