const theme = {
  color: {
    // common color
    dark0: '#c1c2c5',
    dark1: '#a6a7ab',
    dark2: '#909296',
    dark3: '#5c5f66',
    dark4: '#373a40',
    dark5: '#2c2e33',
    dark6: '#25262b',
    dark7: '#1a1b1e',
    dark8: '#141517',
    dark9: '#101113',
    primaryLight: '#d2fa64',
    primaryDark: '#b2dd3c',
    secondaryLight: '#ff3d60',
    secondaryDark: '#e02d4d',
    // specialized color
    bgPrimary: '#101012',
    bgSecondary: '#212529',
    bgThird: '#2c2e33',
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
  fontSize: {
    xxsm: '8px',
    xsm: '12px',
    sm: '14px',
    md: '15px',
    lg: '16px',
    xlg: '18px',
    xxlg: '20px',
    xxxlg: '24px',
  },
  lineHeight: {
    md: '130%',
    lg: '150%',
  },
  // TODO: 반응형 도입시 재정의 필요. (임시로 기준값 설정한 상태)
  responsive: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
  },
  borderRadius: {
    sm: '10px', // card item
    md: '20px', // card
    lg: '16px', // hashtag
  },
} as const;

export default theme;
