import styled from '@emotion/styled';

import Icon from '@src/components/common/Icon';
import theme from '@src/styles/theme';

export const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const UserWrapper = styled.div`
  line-height: ${theme.lineHeight.B};
`;

export const UserNickName = styled.p`
  font-size: ${theme.textSize.B2};
`;
export const UserInfo = styled.p`
  font-size: ${theme.textSize.B3};
`;

export const Comment = styled.p`
  word-break: break-all;
`;

export const LikeWrapper = styled.div<{ $liked: boolean }>`
  display: flex;
  align-items: center;
  font-size: ${theme.textSize.B3};
  line-height: ${theme.lineHeight.B};

  ${({ $liked }) =>
    $liked &&
    `color: ${theme.color.Primary1};
      & path {
      fill: ${theme.color.Primary1};
    }`}
`;

export const LikeIcon = styled(Icon)`
  &:hover {
    cursor: pointer;
  }
`;
