import React from 'react';

import TopicCard, { TopicCardProps } from '@src/components/common/TopicCard';

type PopularTopicCardProps = Omit<TopicCardProps, 'type' | 'badge'>;

const PopularTopicCard = (props: PopularTopicCardProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const options = props.voteOptions.map((option) => ({
    ...option,
    image: null,
    codeBlock: null,
  }));
  return <TopicCard ref={ref} {...props} voteOptions={options} type="feed" badge="인기 토픽" />;
};

export default React.forwardRef<HTMLDivElement, PopularTopicCardProps>(PopularTopicCard);
