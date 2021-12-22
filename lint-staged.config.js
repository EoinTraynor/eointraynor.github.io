module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npm run typecheck --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `next lint --fix ${filenames.join(' ')}`,
    `npm run prettier-write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `npm run prettier-write ${filenames.join(' ')}`,
};
