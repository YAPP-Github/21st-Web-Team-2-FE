import { ComponentMeta, ComponentStory } from '@storybook/react';

import Grid from '.';

export default {
  title: 'Commons/Grid',
  component: Grid,
  argTypes: {
    container: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = ({ ...args }) => (
  <Grid container>
    <Grid {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  column: 3,
  children: <div style={{ height: '100vh', backgroundColor: 'white' }}>hi</div>,
};
