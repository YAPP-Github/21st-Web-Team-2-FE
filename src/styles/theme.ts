const theme = {
  color: {
    // common color
    G8: '#F8F9FA',
    G7: '#9C9EA7',
    G6: '#6E7178',
    G5: '#4E5259',
    G4: '#373a40',
    G3: '#1E1D23',
    G2: '#141517',
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
    basic: 'Pretendard',
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

export default theme;
