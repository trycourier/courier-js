module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-courier`
  extends: ["courier"],
  settings: {
    next: {
      rootDir: ["examples/*/"],
    },
  },
};
