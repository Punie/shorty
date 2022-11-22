/** @type {import("prettier").Config & import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  arrowParens: 'avoid',
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: ['<THIRD_PARTY_MODULES>', '^~', '^[.]{2}[/]', '^[.][/]'],
  importOrderBuiltinModulesToTop: true,
  importOrderCaseInsensitive: false,
  importOrderParserPlugins: ['jsx', 'typescript'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    require('@ianvs/prettier-plugin-sort-imports'),
    require('prettier-plugin-prisma'),
  ],
};
