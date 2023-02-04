import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  gap: 10px;
  background: ${theme.color.G4};
  border-radius: 8px;
  color: ${theme.color.G8};
`;

export const DropDownWrapper = styled.div<{ $visible: boolean }>`
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  display: flex;
  flex-direction: column;
  height: 200px;
  border-radius: 4px;
  background: ${theme.color.G4};
  overflow-y: scroll;
`;

export const DropDownItem = styled.div`
  display: flex;
  align-items: center;
  height: 58px;
  color: ${theme.color.G8};
  padding: 15px 20px;

  &:hover {
    background-color: ${theme.color.txtSecondary};
  }
  &:first-child:hover {
    border-radius: 4px 4px 0 0;
  }
  &:last-child:hover {
    border-radius: 0 0 4px 4px;
  }
`;
