'use strict';

module.exports = function (config) {
    config.set({
        basePath: '../',

        files: ['bower_components/**/*.js', 'xsd.js', 'test/**/unit.js'],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: ['karma-chrome-launcher', 'karma-jasmine', 'karma-spec-reporter'],

        reporters: ["spec"],

        specReporter: {
            maxLogLines: 50,
            suppressFailed: false,
            suppressPassed: false,
            suppressSkipped: false,
            suppressErrorSummary: false
        }
    });
};
