const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.node = {
    __dirname: true,
  };

  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../"),
    loader: require.resolve("ts-loader")
  });
  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  return defaultConfig;
};
