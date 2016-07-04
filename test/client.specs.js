// require all modules ending in ".spec.js" from the
// client directory and all subdirectories
// See http://webpack.github.io/docs/context.html#require-context
var testsContext = require.context("../client", true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);