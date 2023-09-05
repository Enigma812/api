module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order'
  ],
  "plugins": [
    "stylelint-order",
    "stylelint-config-rational-order/plugin"
  ],
  rules: {
    "selector-pseudo-element-no-unknown": [true, { "ignorePseudoElements": ["ng-deep"] }],
    "order/properties-order": [],
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": true,
        "empty-line-between-groups": true,
      }
    ],
    
    'declaration-empty-line-before': null,
    'color-hex-length': "long",
    'selector-class-pattern': null
  }
};
