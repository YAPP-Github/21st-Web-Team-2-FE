import axios from 'axios';

import Topic from '@src/types/Topic';
import VoteOption from '@src/types/VoteOption';

export interface VoteRequest {
  topicId: Topic['topicId'];
  voteOptionId: VoteOption['voteOptionId'];
}

export const vote = (data: VoteRequest) => {
  return axios.post('/vote/option', data);
};
