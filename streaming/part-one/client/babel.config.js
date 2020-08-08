module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
  ],
  env: {
    development: {},
    production: {},
    test: {
      presets: ['@babel/preset-env'],
    },
  },
};
