import styled from '@emotion/styled';
import Image from 'next/image';

import theme from '@src/styles/theme';

export const Container = styled.div`
  width: 857px;

  background-color: ${theme.color.G3};

  border-radius: 8px;
`;

export const TopicTop = styled.div`
  padding: 28px 32px 20px;

  border-bottom: 1px solid ${theme.color.G4};
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

export const Profile = styled(Image)`
  min-width: 28px;
  min-height: 28px;
  width: 28px;
  height: 28px;

  font-size: 0;
  background-color: ${theme.color.G7};

  border-radius: 50%;
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
