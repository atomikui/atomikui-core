import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Breadcrumb from './Breadcrumb';
import Link from '../link';

configure({ adapter: new Adapter() });

describe('<Breadcrumb />', () => {
  let breadcrumb;

  beforeEach(() => {
    breadcrumb = shallow(
      <Breadcrumb>
        <Link href="/home">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/t-shirts" active>
          T-Shirts
        </Link>
      </Breadcrumb>,
    );
  });

  it('Should render without errors', () => {
    expect(breadcrumb.length).toBe(1);
  });

  it('Should render 4 children', () => {
    expect(breadcrumb.find('Link').length).toBe(3);
  });

  it('Should should not render a Link for the active item', () => {
    const link = breadcrumb.find('Link').last().dive().find('Link');
    expect(link.length).toBe(0);
  });
});
