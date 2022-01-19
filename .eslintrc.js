module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-new-object": 2,
    "object-shorthand": 2,
    "quote-props": 0,
    "no-prototype-builtins": 2,
    "prefer-object-spread": 2,
  },
};
