import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Container = styled.div`
  display: flex;
`;
export const Main = styled.main`
  margin: 0 auto 52px;

  display: flex;
  flex-direction: column;
  gap: 28px;

  width: 758px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h2`
  ${theme.font.H2}
  color: ${theme.color.G8}
`;

export const Description = styled.div`
  ${theme.font.B1}
  color: ${theme.color.G7};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 28px 32px;
  gap: 20px;

  background-color: ${theme.color.G2};
  border-radius: 8px;

  ${theme.font.B1}
`;

export const SectionTitle = styled.p`
  ${theme.font.T2}
`;

export const ButtonContainer = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(4, 1fr);

  button {
    gap: 4px;
    height: 58px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: start;

  width: calc(100% - 38px);

  input {
    height: 30px;
  }
`;

export const LabelText = styled.p`
  width: 164px;

  ${theme.font.B3}
  color: ${theme.color.G7};
`;

export const TagListWrapper = styled.div`
  margin-left: 164px;
  width: 100%;
`;

export const Space = styled.div`
  height: 80px;
`;

export const Footer = styled.footer`
  display: flex;

  position: fixed;
  width: 100vw;
  height: 80px;
  left: 0;
  bottom: 0;

  background-color: ${theme.color.G1};
  border-top: 1px solid ${theme.color.G5};
`;

export const FooterContents = styled.div`
  margin: auto;
  display: flex;
  width: 758px;
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  padding: 20px 24px;

  width: 100px;
  height: 47px;

  background-color: ${theme.color.Primary1};
  color: ${theme.color.G1};
  border-radius: 8px;

  &:disabled {
    background-color: ${theme.color.G5};
  }
`;
