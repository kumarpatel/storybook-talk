module.exports = function override(config, env) {
  //do stuff with the webpack config...
  const rawLoaderRule = {
    test: /\.example$/,
    use: "raw-loader"
  };
  config.module.rules = [...config.module.rules, rawLoaderRule]
  return config;
};
