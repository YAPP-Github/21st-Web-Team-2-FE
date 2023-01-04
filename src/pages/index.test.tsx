import { render, screen } from '@testing-library/react';

import Home from '.';

describe('Home', () => {
  it('renders a headig', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { name: /hello/i });

    expect(heading).toHaveTextContent('Hello Web2');
  });
});
