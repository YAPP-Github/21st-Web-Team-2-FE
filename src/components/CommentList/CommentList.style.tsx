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

export const MenuItem = styled.button`
  color: ${theme.color.G6};
  &:hover {
    cursor: pointer;
  }
  &.active {
    color: ${theme.color.G8};
  }
`;

export const CommentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
