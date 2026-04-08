module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-tailwindcss',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': null,
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
  },
};