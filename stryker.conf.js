module.exports = function(config) {
    config.set({
      mutator: "javascript",
      symlinkNodeModules: true,
      packageManager: "npm",
      reporters: ["clear-text", "progress", "html"],
      testRunner: "karma",
      testFramework: "mocha",
      coverageAnalysis: "off",
      karma: {
        projectType: "custom",
        configFile: "karma.conf.js",
        config: {}
      },
      mutate: [
        'src/**/*.js'
      ]
    });
  };