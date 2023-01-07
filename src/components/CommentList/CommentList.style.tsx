import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13.5px 0px;
  gap: 40px;
  border-bottom: 1px solid #373a40;
`;

export const CommentLength = styled.span`
  color: ${theme.color.G7};
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;

export const MenuItem = styled.button<{ $active: boolean }>`
  color: ${theme.color.G6};
  &:hover {
    cursor: pointer;
  }
  ${({ $active }) => $active && `color: ${theme.color.G8};`}
`;

export const CommentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const EmptyCommentList = styled.div`
  margin-top: 40px;
`;
export const EmptyCommentTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  color: ${theme.color.G6};
`;
export const EmptyCommentSubTitle = styled.p`
  margin-top: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  /* white-space: pre-wrap; */
  /* white-space: pre-line; */
  white-space: pre-wrap;

  /* width: 307px; */
  color: ${theme.color.G6};
`;
