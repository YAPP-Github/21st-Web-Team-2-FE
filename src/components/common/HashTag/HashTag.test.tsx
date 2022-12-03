import { RenderResult, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import HashTag, { HashTagProps } from '.';

const DEFAULT_ARGS: HashTagProps = {
  value: 'React',
  onClick: jest.fn(),
};

const renderHashTag = (props: Partial<HashTagProps>): RenderResult => {
  return render(<HashTag {...DEFAULT_ARGS} {...props} />);
};

describe('with value', () => {
  test('render value', async () => {
    const value = 'TEST';

    renderHashTag({ value });

    await screen.findByText(value);
  });
});

describe('with onClick', () => {
  test('called with value', async () => {
    const value = 'TEST';
    const onClick = jest.fn();

    renderHashTag({ value, onClick });
    const dom = await screen.findByText(value);
    await userEvent.click(dom);

    expect(onClick).toBeCalledWith(value);
  });
});
