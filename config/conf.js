var path = require('path');


exports.config = {
	// The address of a running selenium server.
	seleniumAddress : 'http://localhost:4444/wd/hub',

	// Capabilities to be passed to the webdriver instance.
	capabilities : {

		'browserName' : 'chrome'
	},
	// URL of the app you want to test.
	baseUrl : 'https://predix.ge.com/',

	// Spec patterns are relative to the location of the spec file. They may
	// include glob patterns.
	specs : [

		'../tests/catalogPage.js'

    ],

	onPrepare : function() {

		var HtmlReporter = require('protractor-html-screenshot-reporter');

		jasmine.getEnv().addReporter(new HtmlReporter({
			baseDirectory : 'reports',
			takeScreenShotsForSkippedSpecs : false,
			takeScreenShotsOnlyForFailedSpecs : true
		}));

		browser.getCapabilities().then(function(cap) {
			browser.browserName = cap.caps_.browserName;
		});

	},

	framework : 'jasmine',

	// Options to be passed to Jasmine-node.
	jasmineNodeOpts : {
		showColors : true, // Use colors in the command line report.
		isVerbose : true, // List all tests in the console
		includeStackTrace : true
	}
};
