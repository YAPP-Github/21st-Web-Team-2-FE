const theme = {
  color: {
    bgPrimary: '#000000',
    bgSecondary: '#00dd00',
    txtPrimary: '#FFFFFF',
    txtDanger: '#dd0d0d',
    txtTertiary: '#999999',
    borderPrimary: '#666666',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    bold: 700,
  },
  fontSize: {
    sm: '12px',
    md: '14px',
    lg: '16px',
  },
  lineHeight: {
    sm: '16px',
    md: '20px',
    lg: '24px',
  },
  spacing: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  responsive: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    lg: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
} as const;

export default theme;
