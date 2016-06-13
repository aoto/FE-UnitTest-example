'use strict';
module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      './node_modules/chai/chai.js',
      './node_modules/sinon/pkg/sinon.js',
      'browser_test/browser/jquery-2.2.4.min.js',
      'https://www.promisejs.org/polyfills/promise-6.1.0.js',
      './node_modules/whatwg-fetch/fetch.js',
      'src/browser/myapi.js',
      'src/browser/add.js',
      'browser_test/browser/es5.jquery.spec.js',
      'browser_test/browser/promise.fetch.spec.js',
      'browser_test/browser/ajax.spec.js'
    ],
    preprocessors: {
      'src/browser/myapi.js': ['coverage'],
      'src/browser/add.js': ['coverage']
    },
    plugins: ['karma-mocha', 'karma-phantomjs-launcher', 'karma-chrome-launcher', 'karma-firefox-launcher', 'karma-coverage', 'karma-spec-reporter'],
    browsers: ['PhantomJS', 'Firefox', 'Chrome'],
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'coverage_browser',
      reporters: [{
        type: 'json',
        subdir: '.',
        file: 'coverage.json',
      }, {
        type: 'lcov',
        subdir: '.'
      }, {
        type: 'text-summary'
      }]
    }
  });
};