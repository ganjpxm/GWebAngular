// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-07-05 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'bower_components/waypoints/lib/noframework.waypoints.min.js',
      'bower_components/SHA-1/sha1.js',
      'bower_components/angularitics/src/angulartics.js',
      'bower_components/angularitics/src/angulartics-adobe.js',
      'bower_components/angularitics/src/angulartics-chartbeat.js',
      'bower_components/angularitics/src/angulartics-clicky.js',
      'bower_components/angularitics/src/angulartics-cnzz.js',
      'bower_components/angularitics/src/angulartics-flurry.js',
      'bower_components/angularitics/src/angulartics-ga-cordova.js',
      'bower_components/angularitics/src/angulartics-ga.js',
      'bower_components/angularitics/src/angulartics-gtm.js',
      'bower_components/angularitics/src/angulartics-kissmetrics.js',
      'bower_components/angularitics/src/angulartics-mixpanel.js',
      'bower_components/angularitics/src/angulartics-piwik.js',
      'bower_components/angularitics/src/angulartics-scroll.js',
      'bower_components/angularitics/src/angulartics-segmentio.js',
      'bower_components/angularitics/src/angulartics-splunk.js',
      'bower_components/angularitics/src/angulartics-woopra.js',
      'bower_components/angularitics/src/angulartics-marketo.js',
      'bower_components/angularitics/src/angulartics-intercom.js',
      'bower_components/angularitics/src/angulartics-inspectlet.js',
      'bower_components/angularitics/src/angulartics-newrelic-insights.js',
      'bower_components/angular-filter/dist/angular-filter.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
