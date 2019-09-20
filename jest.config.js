module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        require.resolve('jest-preset-angular/InlineHtmlStripStylesTransformer')
      ]
    }
  },
  setupFilesAfterEnv: [
    '<rootDir>/node_modules/@angular-builders/jest/dist/jest-config/setup.js'
  ],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  testMatch: [
    '**/__tests__/**/*.+(ts|js)?(x)',
    '**/+(*.)+(spec|test).+(ts|js)?(x)'
  ]
};
