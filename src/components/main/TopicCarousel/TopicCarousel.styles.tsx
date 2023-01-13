import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 24px;
  height: 62px;

  color: ${theme.color.G8};
`;
export const Welcome = styled.div`
  font-size: 28px;
  line-height: 34px;
  font-family: ${theme.fontFamily.english};
`;

export const SubText = styled.div`
  font-size: ${theme.textSize.B1};
  line-height: ${theme.lineHeight.B};
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StepText = styled.div`
  margin-right: 6px;
  font-size: ${theme.textSize.B2};
  color: ${theme.color.G7};
`;

export const Highlight = styled.span`
  color: ${theme.color.Primary1};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  background-color: ${theme.color.G2};
  border-radius: 50%;

  &:hover {
    background-color: ${theme.color.G3};
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const TopicContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;

  gap: 24px;

  transition: all 0.5s ease-in-out;
`;

export const TopicWrapper = styled.div`
  flex: 1 0 100%;
`;
