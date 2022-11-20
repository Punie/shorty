/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: 'avoid',
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: ['<THIRD_PARTY_MODULES>', '^~', '^[.]{2}[/]', '^[.][/]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: [
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-prisma'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
};
