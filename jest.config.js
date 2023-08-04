/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "./apps/frontend/tsconfig.json",
    },
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": [
      "ts-jest",
      {
        babelConfig: {
          comments: false,
          plugins: ["effector/babel-plugin"],
        },
      },
    ],
  },
};
