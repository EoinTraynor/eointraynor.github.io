module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npm run typecheck --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    // `next lint --fix ${filenames.join(' ')}`,
    `prettier --write --ignore-unknown ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `prettier --write --ignore-unknown ${filenames.join(' ')}`,
};
