import styled from '@emotion/styled';

import Icon from '@src/components/common/Icon';

export const Wrapper = styled.main`
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const TopicCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ShareIcon = styled(Icon)`
  align-self: flex-end;
  cursor: pointer;
`;
