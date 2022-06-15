module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  // "off"或者0，不启用这个规则
  // "warn"或者1，出现问题会有警告
  // "error"或者2，出现问题会报错
  rules: {
    "prettier/prettier": [
      "error",
      { 
        "endOfLine": "auto",
        "requireConfig": false,
        "singleQuote": true,
        "printWidth": 100,
        "semi": false,
        "bracketSpacing": true,
        "trailingComma": "none",
        "arrowParens": "avoid"
      }
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": 0,
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
  },
};
