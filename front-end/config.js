const chalk = require("chalk");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

module.exports = {
  publicPath: "./",
  appBuild: `/Users/siyuan.zhu/Documents/zhuzhu-work/react-tpl/react-tpl/front-end/build`,
  plugins: [
    new ProgressBarPlugin({
      complete: "█",
      format: `${chalk.green("Building")} [ ${chalk.green(
        ":bar"
      )} ] ':msg:' ${chalk.bold("(:percent)")}`,
      clear: true
    })
  ]
};
