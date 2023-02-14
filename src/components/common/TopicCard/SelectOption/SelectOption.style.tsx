import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';

import { TopicCardType } from '@src/components/common/TopicCard';
import theme from '@src/styles/theme';

interface ContainerProps {
  $result: boolean;
  $selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SelectButton = styled.button<ContainerProps>`
  display: flex;
  align-items: center;

  position: relative;
  width: 100%;
  height: 68px;

  background-color: ${theme.color.G5};
  border-radius: 4px;

  font-size: ${theme.textSize.T2};
  color: ${theme.color.G8};

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

export const ImageWrapper = styled.div`
  position: relative;

  height: 300px;

  background-color: ${theme.color.G6};
  border-radius: 4px;
`;

export const OptionImage = styled(Image)`
  object-fit: contain;
`;

interface CodeBlockWrapperProps {
  $type: TopicCardType;
}

export const CodeBlockWrapper = styled.div<CodeBlockWrapperProps>`
  position: relative;

  height: 300px;

  border-radius: 8px;

  overflow: hidden;

  .w-tc-editor {
    height: 300px;
  }

  ${({ $type }) =>
    $type === 'feed'
      ? css`
          overflow: hidden;
        `
      : css`
          &:hover {
            position: absolute;

            width: 100%;
            height: auto;
            min-height: 300px;

            top: 72px;
            left: 0;
            z-index: 9;

            .w-tc-editor {
              height: auto;
              min-height: 300px;
            }

            .gradiant {
              visibility: hidden;
            }
          }
        `}
`;

export const CodeBlockGradiant = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  left: 0;
  bottom: 0;

  background: linear-gradient(180deg, rgba(33, 37, 41, 0) 0%, #212529 100%);
  border-radius: 8px;
`;
