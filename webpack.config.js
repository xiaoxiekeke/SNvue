var ExtractTextPlugin = require("extract-text-webpack-plugin");
// webpack.config.js
module.exports = {
  // entry point of our application
  // entry: ["font-awesome-webpack!./path/to/font-awesome.config.js","./src/main.js"],
  entry:'./src/main.js',
  // where to place the compiled bundle
  output: {
    path: './static',
    publicPath: '/static/',
    filename: 'build.js'
  },
  module: {
    // `loaders` is an array of loaders to use.
    // here we are only configuring vue-loader
    loaders: [
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
      },
      { test:/\.js$/,loaders:['babel?presets[]=es2015'],exclude:/node_modules/},
      // { test:/\.css$/,loaders:['style','css']}
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'url',
        query: {
          // limit for base64 inlining in bytes
          limit: 10000,
          // custom naming format if file is larger than
          // the threshold
          name: '[name].[ext]?[hash]'
        }
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style!css!autoprefixer?{browsers:["last 2 version", "> 1%","IE 7"]}'
      // }

    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  vue: {
    loaders: {
      // {
      //   test: /\.less$/,
      //   loader: "style!css!less"
      // },
      // css: ExtractTextPlugin.extract("css"),
      // you can also include <style lang="less"> or other langauges
      // less: ExtractTextPlugin.extract("css!less")
    },
    autoprefixer: {
      browsers: ['last 2 versions','> 1%','IE 7']
    },
    postcss: [require('postcss-cssnext')()],

  }
  
}
