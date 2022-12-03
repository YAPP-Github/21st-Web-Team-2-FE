import React from 'react';

import HotVoteListItem from '@src/components/Home/HotVoteList/HotVoteListItem';
import { HotVote } from '@src/types/vote';

import * as S from './HotVoteList.stlyes';

interface HotVoteListProps {
  title: string;
  hotVotes: HotVote[];
}

const HotVoteList: React.FC<HotVoteListProps> = (props) => {
  const { title, hotVotes } = props;
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.VotesContainer>
        {hotVotes.map((vote) => (
          <HotVoteListItem key={vote.id} hotVote={vote} />
        ))}
      </S.VotesContainer>
    </S.Container>
  );
};

export default HotVoteList;
