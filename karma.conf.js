/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',
        files: [
            './test/*.js'
        ],
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        // list of files to exclude
        exclude: [],
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['html', 'progress'],
        
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        // web server port
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],
        plugins: [
            "karma-html-reporter",
            "karma-chrome-launcher",
            "karma-phantomjs-launcher",
            "karma-jasmine"
        ],
        // Continuous Integration mode
        // if true, Karma, captures browsers, runs the tests and exits
        singleRun: true
    });
};
