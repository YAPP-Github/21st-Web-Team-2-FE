import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Container = styled.div`
  width: 100%;

  background-color: ${theme.color.G3};

  border-radius: 8px;
`;

export const TopicTop = styled.div`
  padding: 28px 32px 20px;

  border-bottom: 1px solid ${theme.color.G4};
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 8px 12px;
  gap: 2px;

  width: fit-content;
  height: 34px;

  background: ${theme.color.G4};
  border-radius: 4px;

  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.textSize.B3};
  line-height: ${theme.lineHeight.B};
  color: ${theme.color.Primary1};

  cursor: pointer;
`;

export const TopicHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  margin-bottom: 8px;

  font-size: ${theme.textSize.H3};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.G8};
`;

export const Contents = styled.div`
  margin-bottom: 24px;

  font-size: ${theme.textSize.B2};
  font-weight: ${theme.fontWeight.regular};
  color: ${theme.color.G8};
`;

interface SelectOptionContainerProps {
  $odd?: boolean;
}

export const SelectOptionContainer = styled.div<SelectOptionContainerProps>`
  display: grid;
  grid-template-columns: 1fr 1fr ${({ $odd }) => $odd && '1fr'};
  padding: 0;
  gap: 20px;
`;

export const TopicBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;

  height: 60px;

  font-size: ${theme.textSize.B3};
  color: ${theme.color.G7};
  white-space: nowrap;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LikeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  gap: 2px;

  height: 36px;

  background-color: transparent;
  color: ${theme.color.G7};

  border: 1px solid ${theme.color.G5};
  border-radius: 100px;
`;

export const TopicInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
`;

export const TopicInfo = styled.span`
  display: flex;
  flex-direction: row;
  padding: 0;
  gap: 2px;

  svg {
    margin-top: -2px;
  }
`;
