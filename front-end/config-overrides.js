const chalk = require("chalk");
const path = require("path");
const { appBuild, publicPath, plugins } = require("./config");
console.log(chalk.blue(`your buildPath is ${appBuild}\n`));
function resolve(dir) {
  return path.join(__dirname, ".", dir);
}
module.exports = {
  webpack: function(config, env) {
    config.output.publicPath = publicPath;
    config.resolve.alias = { ...config.resolve.alias, "@": resolve("src") };
    plugins.forEach(p => {
      config.plugins.push(p);
    });
    return config;
  },
  paths: function(paths, env) {
    paths.appBuild = appBuild;
    return paths;
  }
};
