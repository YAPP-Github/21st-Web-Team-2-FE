import { css } from '@emotion/react';

const theme = {
  font: {
    code: css`
      font-family: 'D2Coding';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
    `,
    H2: css`
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
    `,
    B1: css`
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
    `,
    B2: css`
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
    `,
    B3: css`
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
    `,
    T2: css`
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
    `,
  },
  color: {
    // common color
    G8: '#F8F9FA',
    G7: '#C1C2C5',
    G6: '#6E7178',
    G5: '#4E5259',
    G4: '#373a40',
    G3: '#2C2E33',
    G2: '#212529',
    G1: '#101012',
    Primary1: '#D2FA64',
    Primary2: '#b2dd3c',
    Secondary1: '#ff3d60',
    Secondary2: '#e02d4d',
    // specialized color
    topicPrimary: '#ff7991',
    topicSecondary: '#aef19d',
    txtPrimary: '#f1f3f5',
    txtSecondary: '#6E7178',
    txtDanger: '#ff0000',
    borderPrimary: '#f8f9fa',
  },
  fontFamily: {
    basic: 'Pretendard-Regular',
    english: 'PoetsenOne-Regular',
    mainTitle: 'Syne',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    bold: 700,
  },
  textSize: {
    H1: '40px',
    H2: '24px',
    H3: '20px',
    T1: '18px',
    T2: '16px', // B1과 동일
    T3: '15px',
    B1: '16px',
    B2: '14px',
    B3: '12px',
    B4: '8px',
    code: '16px',
  },
  lineHeight: {
    H: '130%',
    B: '150%',
  },
  // TODO: 반응형 도입시 재정의 필요. (임시로 기준값 설정한 상태)
  responsive: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
  },
} as const;

export type ThemeColor = keyof typeof theme.color;

export default theme;
