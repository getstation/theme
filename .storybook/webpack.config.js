const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.node = {
    __dirname: true,
  };

  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../"),
    loader: [
        require.resolve('@storybook/addon-storysource/loader'),
        require.resolve("ts-loader"),
    ],
    enforce: 'pre',
  });
  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  return defaultConfig;
};
