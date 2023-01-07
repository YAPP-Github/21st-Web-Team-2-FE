import { css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '@src/styles/theme';

interface ContainerProps {
  $result: boolean;
  $selected: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  height: 68px;

  background-color: ${theme.color.G5};
  border-radius: 4px;

  font-size: ${theme.textSize.T2};

  cursor: pointer;

  ${({ $result }) =>
    $result ||
    css`
      &:hover {
        background-color: ${theme.color.G6};
      }
    `}

  &:hover .progress {
    background-color: ${({ $selected }) => ($selected ? theme.color.Secondary2 : theme.color.G3)};
  }
`;

export interface ProgressBarProps {
  $rate: number;
  $selected?: boolean;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  width: calc(${({ $rate }) => $rate} * 100%);
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background-color: ${({ $selected }) => ($selected ? theme.color.Secondary1 : theme.color.G4)};
  border-radius: 4px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 16px;
  gap: 4px;

  position: absolute;
  width: 100%;
`;

export const Text = styled.div`
  max-width: calc(100% - 75px);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Rate = styled.div`
  margin-left: auto;
`;
