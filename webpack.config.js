/**
 * Created by Administrator on 2017/8/18.
 */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import glob from'glob';
const webpack = require('webpack')

const fn = (webpackConfig, env) => { // eslint-disable-line
  const production = env === 'production'


  for (let plugin, i = 0, l = webpackConfig.plugins.length; i < l; i++) {
    plugin = webpackConfig.plugins[i]
    if (plugin instanceof webpack.optimize.CommonsChunkPlugin) {
      webpackConfig.plugins[i] = new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: 'common.[chunkhash].js'
      })
      break
    }
  }

  // let plugins=[];
  //
  // let files = glob.sync("src/pages/*.js");
  // files.forEach((v) => {
  //   const name = (v.split("/")[2]).split(".")[0]
  //
  //   console.log("name=>"+name)
  //   let conf ={
  //     hash: false,
  //     template: `${__dirname}/src/entry.ejs`,
  //     minify: production ? {
  //       collapseWhitespace: true,
  //     } : null,
  //     headScripts: production ? null : ['/roadhog.dll.js', name],
  //     chunks: ["common", name]
  //   }
  //
  //   plugins.push(// eslint-disable-line
  //     new HtmlWebpackPlugin(conf),
  //   );
  // })
  //
  // webpackConfig.plugins = webpackConfig.plugins.concat(plugins);

  // Alias
  webpackConfig.resolve.alias = {
    "@components": `${__dirname}/src/components`,
    "@utils": `${__dirname}/src/utils`,
    "@services": `${__dirname}/src/services`,
    "@models": `${__dirname}/src/models`,
    "@routes": `${__dirname}/src/routes`,
    "@themes": `${__dirname}/src/themes`,
    "@assets": `${__dirname}/src/assets`,
  }


  return webpackConfig;
};

export default fn;
