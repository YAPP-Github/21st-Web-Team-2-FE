import { RenderResult, render as defaultRender, screen } from '@testing-library/react';
import React from 'react';

import TagList, { TagListProps } from '.';

const DEFAULT_ARGS: TagListProps = {
  tags: ['React', 'Vue'],
};

const render = (props: Partial<TagListProps>): RenderResult => {
  return defaultRender(<TagList {...DEFAULT_ARGS} {...props} />);
};

describe('with tags', () => {
  test('render each value', async () => {
    const tags = ['React', 'Vue', 'Angular'];

    render({ tags });

    await Promise.all(tags.map(async (tag) => await screen.findByText(tag)));
  });
});
