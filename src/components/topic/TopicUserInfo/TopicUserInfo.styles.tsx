import styled from '@emotion/styled';
import Image from 'next/image';

import theme from '@src/styles/theme';

export const Wrapper = styled.div`
  padding: 0 20px;
`;

export const MemberSummary = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 28px 10px;
  gap: 8px;
  border-bottom: 1px solid ${theme.color.G5};
`;

export const MemberWrapper = styled.div`
  line-height: ${theme.lineHeight.B};
`;

export const MemberNickName = styled.p`
  font-size: ${theme.textSize.B2};
`;
export const MemberInfo = styled.p`
  font-size: ${theme.textSize.B3};
`;

export const TagListWrapper = styled.div`
  padding: 16px;
`;
