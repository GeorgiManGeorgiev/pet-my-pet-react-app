module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'new-cap': [2, { capIsNewExceptions: ['List', 'Map', 'Set'] }],
    'react/no-multi-comp': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'import/default': 0,
    'import/no-duplicates': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 2,
    'comma-dangle': 0,
    indent: [2, 2, { SwitchCase: 1 }],
    'no-console': 0,
    'no-alert': 0,
    'linebreak-style': 0,
    'react/prefer-stateless-function': [0, { ignorePureComponents: true }],
    'react/prop-types': [1, { }],
  },
};
