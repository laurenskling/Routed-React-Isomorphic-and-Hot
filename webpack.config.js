var webpack = require('webpack');  
var path = require('path');

var appPath = path.resolve(__dirname, 'app', 'index.jsx');

module.exports = {  
  devtool: 'eval',
  entry: [
    // For hot style updates
    'webpack/hot/dev-server', 

    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://localhost:8080', 

    // Our application
    appPath
  ],
  
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  
  plugins: [
    new webpack.NoErrorsPlugin()
  ]

};