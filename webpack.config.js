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
        filename: 'common.[hash].js'
      })
      break
    }
  }

  //根据多入口js，生成对应的html
  let files = glob.sync("src/pages/*.js");
  files.forEach((v) => {
    const name = (v.split("/")[2]).split(".")[0]

    console.log("name=>" + name)

    webpackConfig.plugins.push(// eslint-disable-line
      new HtmlWebpackPlugin({
        filename:`./${name}.html`,
        hash: false,
        template: `${__dirname}/src/entry.ejs`,
        minify: production ? {
          collapseWhitespace: true,
        } : null,
        //headScripts: production ? null : ['/roadhog.dll.js', name],
        chunks: ["common", name]
      }),
    );

  })

  // webpackConfig.plugins = webpackConfig.plugins.concat(plugins);

  // webpackConfig.plugins.push(// eslint-disable-line
  //   new HtmlWebpackPlugin({
  //     filename:'.//msgTplSetting.html',
  //     hash: false,
  //     template: `${__dirname}/src/entry.ejs`,
  //     minify: production ? {
  //       collapseWhitespace: true,
  //     } : null,
  //     //headScripts: production ? null : ['/roadhog.dll.js', name],
  //     chunks: ["common", "msgTplSetting"]
  //   }),
  // );


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
