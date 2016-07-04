var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};
webpackConfig.plugins = [];
webpackConfig.devtool = 'inline-source-map';

module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: ['./public/bundle.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './test/client.specs.js'],
    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom) 
      exitOnResourceError: true
    },
    port: 9876,
    preprocessors: {
      // npm install karma-webpack --save-dev
      // npm install --save-dev karma-sourcemap-loader
      './public/bundle.js': ['webpack', 'sourcemap'],
      './test/client.specs.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  });
};
