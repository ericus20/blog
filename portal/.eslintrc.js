module.exports = {
  extends: [
    "prettier",
    'eslint:recommended',
    "plugin:jest-dom/recommended",
    'plugin:storybook/recommended',
    "plugin:@typescript-eslint/recommended",
    'next/core-web-vitals',
  ],
  globals: {
    React: 'readonly',
  },
  overrides: [
    {
      files: ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
      rules: {
        // example of overriding a rule
        "storybook/hierarchy-separator": "error"
      }
    }
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "error"
  }
};
