import styled from '@emotion/styled';

import Icon from '@src/components/common/Icon';
import theme from '@src/styles/theme';

export const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Avatar = styled.div`
  min-width: 44px;
  max-width: 44px;
  min-height: 44px;
  max-height: 44px;
  background: ${theme.color.G7};
  border-radius: 50%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const UserWrapper = styled.div`
  line-height: 21px;
`;

export const UserNickName = styled.p`
  font-size: 14px;
`;
export const UserInfo = styled.p`
  font-size: 12px;
`;

export const Comment = styled.p``;

export const VoteWrapper = styled.div<{ $liked: boolean }>`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 18px;

  ${({ $liked }) =>
    $liked &&
    `color: ${theme.color.Primary1};
      & path {
      fill: ${theme.color.Primary1};
    }`}
`;

export const VoteIcon = styled(Icon)`
  &:hover {
    cursor: pointer;
  }
`;
