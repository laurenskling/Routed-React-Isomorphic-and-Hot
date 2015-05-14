var webpack = require('webpack');  
var path = require('path');

var appPath = path.resolve(__dirname, 'app', 'index.jsx');

module.exports = {  
  // We change to normal source mapping
  devtool: 'source-map',
  
  entry: appPath,
  
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.css$/, loader: "style!css" }
    ]
  }
  
};