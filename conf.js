
exports.config = {
    framework : "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
    capabilities:{
        browserName: 'chrome'
    },
    
    specs: ['./tests/Home.feature'],
    suites:{
      functional : ['./tests/SampleTS.js']
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // cucumber command line options
    cucumberOpts: {
    require: ['./cucumber/*.js'],  // require step definition files before executing features
    tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    strict: true,                  // <boolean> fail if there are any undefined or pending steps
    format: ["json:results.json"], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    'dry-run': false,              // <boolean> invoke formatters without executing steps
    compiler: [],                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    ignoreUncaughtExceptions: true
  },

    onPrepare:()=>{
      
    }
}