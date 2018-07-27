module.exports = {
  "collectCoverage": true,
  "coverageDirectory": "coverage",
  "verbose": true,
  "roots": [
    "./__tests__"
  ],
  "transform": {
    "^.+\\.js?$": "babel-jest"
  },
  "coverageThreshold": {
    "global": {
      "branches": 78,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  },
  "setupFiles": [
    "./setupTest"
  ]
}