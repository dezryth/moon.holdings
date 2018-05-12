import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

/**
 * Automatically tests that the component matches the Jest snapshot.
 * NOTE: If you are receiving a warning like the following in your tests:
 *
 *   Warning: React.createElement: type is invalid -- expected a string...
 *
 * Then you most likely need to pass the appropriate props.
 *
 * @param {!React.Component} Component The React component to wrap and test.
 * @param {!Object} props The (optional) props to use for the basic Jest test.
 */
export const testCommonComponentAttrs = (Component, props) => {
  describe('when rendering', () => {
    const wrapper = shallow(<Component {...props} />);

    it('should render a component matching the snapshot', () => {
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
      expect(wrapper).toHaveLength(1);
    });
  });
};

export const getComponentWrapper = (Component, props) =>
  shallow(<Component {...props} />);
