module.exports = {
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "env": {
    "browser": true,
  },
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "eol-last": ["error", "always"],
    "semi": ["error", "always"],
    'react/prefer-stateless-function': 'off',
    'react/display-name': 'off',
    'no-console': 'off',
    'react/destructuring-assignment': 'off',
    'import/prefer-default-export': 'off',
    'react/no-multi-comp': 'off'
  },
};