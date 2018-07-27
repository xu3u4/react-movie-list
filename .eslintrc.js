module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "parser": "babel-eslint",
  "extends": ["airbnb", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "new-cap": 0,
    "import/no-unresolved": 0,
    "no-underscore-dangle": 0,
    "comma-dangle":0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "arrow-body-style": 0,
    "arrow-parens": 0,
    "no-param-reassign": ["error", { "props": false }],
    "react/destructuring-assignment": 0,
    "react/self-closing-comp": 1,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": 0
  },
  settings:{
    'import/resolver': 'webpack',
  }
};