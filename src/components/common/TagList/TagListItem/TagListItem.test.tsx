import { RenderResult, render as defaultRender, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import TagListITem, { TagListItemProps } from '.';

const DEFAULT_ARGS: TagListItemProps = {
  value: 'React',
  onClick: jest.fn(),
};

const render = (props: Partial<TagListItemProps>): RenderResult => {
  return defaultRender(<TagListITem {...DEFAULT_ARGS} {...props} />);
};

describe('with value', () => {
  test('render value', async () => {
    const value = 'TEST';

    render({ value });

    await screen.findByText(value);
  });
});

describe('with onClick', () => {
  test('called with value', async () => {
    const value = 'TEST';
    const onClick = jest.fn();

    render({ value, onClick });
    const dom = await screen.findByText(value);
    await userEvent.click(dom);

    expect(onClick).toBeCalledWith(value);
  });
});

describe('with delete type', () => {
  test('render delete icon', async () => {
    const value = 'TEST';

    render({ value, type: 'delete' });
    await screen.findByTestId('delete');
  });
});

describe('with onDelete', () => {
  test('called with value', async () => {
    const value = 'TEST';
    const onDelete = jest.fn();

    render({ value, onDelete, type: 'delete' });
    const dom = await screen.findByTestId('delete');
    await userEvent.click(dom);

    expect(onDelete).toBeCalledWith(value);
  });
});
