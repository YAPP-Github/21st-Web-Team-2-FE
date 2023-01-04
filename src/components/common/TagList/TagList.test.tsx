import { RenderResult, render as defaultRender, screen } from '@testing-library/react';
import React from 'react';

import TagList, { TagListProps } from '.';

const DEFAULT_ARGS: TagListProps = {
  tags: [{ value: 'React' }, { value: 'Vue' }],
};

const render = (props: Partial<TagListProps>): RenderResult => {
  return defaultRender(<TagList {...DEFAULT_ARGS} {...props} />);
};

describe('with tags', () => {
  test('render each value', async () => {
    const tags = [{ value: 'React' }, { value: 'Vue' }, { value: 'Angular' }];

    render({ tags });

    await Promise.all(tags.map(async (tag) => await screen.findByText(tag.value)));
  });
});
