import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ShareIcon from '.';

export default {
  title: 'common/ShareIcon',
  component: ShareIcon,
  argTypes: {},
} as ComponentMeta<typeof ShareIcon>;

const Container = styled.div`
  display: flex;
  justify-content: end;
`;

const Template: ComponentStory<typeof ShareIcon> = (args) => (
  <Container>
    <ShareIcon {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  url: 'http://localhost:3000/topics/1',
};
