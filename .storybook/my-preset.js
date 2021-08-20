const path = require('path');

module.exports = {
  managerWebpack: async (config, options) => {
    // update config here
    return config;
  },
  managerBabel: async (config, options) => {
    // update config here
    return config;
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need

    config.module.rules.push({
      test: /\.scss$/,
      use: ['lit-scss-loader', 'extract-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
  babel: async (config, options) => {
    return config;
  },
};
