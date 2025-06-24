module.exports = {
  // TypeScript/JavaScript files in apps
  "apps/**/*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"],

  // TypeScript/JavaScript files in packages
  "packages/**/*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"],

  // JSON files
  "**/*.json": ["prettier --write"],

  // Markdown files
  "**/*.md": ["prettier --write"],

  // CSS files
  "**/*.{css,scss,sass}": ["prettier --write"],
};
