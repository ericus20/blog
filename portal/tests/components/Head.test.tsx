import { render } from '@testing-library/react';
import Head from '../../src/components/Head';

describe('Head', () => {
  it('renders a Head', () => {
    const { container } = render(<Head title="Test" />);

    expect(container).toMatchSnapshot();
  });
});
