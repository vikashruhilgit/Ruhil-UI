const path = require('path');

module.exports = {
  stories: [
    '../stories/*.stories.mdx',
    '../stories/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    path.resolve('./.storybook/my-preset'),
    '@storybook/addon-essentials',
  ],
  core: {
    builder: 'webpack5',
  },
};
