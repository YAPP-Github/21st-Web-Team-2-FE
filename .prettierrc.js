module.exports = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 120,
  arrowParens: 'always',
  importOrder: ['^@mocks/(.*)$', '@src/styles/reset.css', '@src/styles/common.css', '^@src/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
