/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  moduleDirectories: ["node_modules"],
  coverageProvider: "v8",
  testEnvironment: "node",
  coverageDirectory: "coverage",
  transform: {
    ".*\\.ts$": ["@swc/jest"],
  },
  clearMocks: true,
};
