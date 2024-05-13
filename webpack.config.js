const path = require('path');

module.exports = function (env, argv) {
  return {
    mode: argv.mode,
    entry: path.resolve(__dirname, 'src/rsa.js'),
    output: {
      path: path.resolve(__dirname, 'dist/browser'),
      // filename: 'bundle.[fullhash].js',
      // filename: '[name].[contenthash:8].js',
      filename: 'bundle.js',
      libraryTarget: 'umd',
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
        },
      ],
    },
    devtool: argv.mode === 'production' ? 'source-map' : 'inline-source-map',
  };
};
