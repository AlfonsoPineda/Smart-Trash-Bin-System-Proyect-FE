module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "jsx-a11y",
    "import"
  ],
  rules: {
    "linebreak-style": 0,
    "jsx-a11y/label-has-associated-control": ["error", {
        "required": {
          "some": ["nesting", "id"]
        }
      }],
      "jsx-a11y/label-has-for": ["error", {
        "required": {
          "some": ["nesting", "id"]
        }
      }]
  },
};