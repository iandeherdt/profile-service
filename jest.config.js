module.exports = {
  verbose: true,
  notify: false,
  coverageThreshold: {
    global: {
      functions: 80,
      branches: 80,
      lines: 80,
      statements: 80
    }
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "json"
  ],
  transform: {
    "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
};
