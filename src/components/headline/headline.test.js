import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Headline from './Headline';

configure({ adapter: new Adapter() });

describe('<Headline />', () => {
  let headline;

  beforeEach(() => {
    headline = shallow(
      <Headline
        title="Atomik UI"
        subtitle="A Library of Accessible React Components"
      />,
    );
  });

  it('Should render', () => {
    expect(headline).toHaveLength(1);
  });
});
