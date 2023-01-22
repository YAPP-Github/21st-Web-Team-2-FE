import styled from '@emotion/styled';
import Image from 'next/image';

import theme from '@src/styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
`;

export const Profile = styled(Image)`
  background: transparent;
  background-color: ${theme.color.G7};
  border-radius: 50%;
`;

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const UserNickName = styled.p`
  font-size: ${theme.textSize.B2};
`;

export const UserInfo = styled.p`
  font-size: ${theme.textSize.B3};
`;
