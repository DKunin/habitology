// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  globals: {
    process: true,
    module: true,
    Promise: true,
    require: true,
    __dirname: true
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'eslint:recommended',
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  rules: {
    'no-console': 0,
    'valid-jsdoc': 2,
    'no-underscore-dangle': 2,
    'no-empty': [
      2,
      {
        allowEmptyCatch: true
      }
    ],
    'no-implicit-coercion': [
      2,
      {
        boolean: true,
        string: true,
        number: true
      }
    ],
    'no-with': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': 2,
    'no-multi-str': 2,
    'dot-location': [2, 'property'],
    'operator-linebreak': [2, 'after'],
    'padded-blocks': [2, 'never'],
    'quote-props': [
      2,
      'as-needed'
    ],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'space-unary-ops': [
      2,
      {
        words: false,
        nonwords: false
      }
    ],
    'comma-spacing': [2],
    'no-spaced-func': 2,
    'space-before-function-paren': [
      2,
      {
        anonymous: 'ignore',
        named: 'never'
      }
    ],
    'space-in-parens': [2, 'never'],
    'comma-dangle': [2, 'never'],
    'no-trailing-spaces': 2,
    yoda: [2, 'never'],
    camelcase: [
      2,
      {
        properties: 'never'
      }
    ],
    'comma-style': [2, 'last'],
    curly: [2, 'all'],
    'dot-notation': 2,
    'eol-last': 2,
    'wrap-iife': 2,
    semi: [2, 'always'],
    'space-infix-ops': 2,
    'keyword-spacing': [
      2,
      {
        overrides: {
          else: {
            before: true
          },
          while: {
            before: true
          },
          catch: {
            before: true
          },
          finally: {
            before: true
          }
        }
      }
    ],
    'spaced-comment': [2, 'always'],
    'space-before-blocks': [2, 'always'],
    indent: [
      2,
      4,
      {
        SwitchCase: 1
      }
    ],
    'linebreak-style': [2, 'unix'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true
      }
    ],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
