require.config({
	baseUrl: "/javascripts",
  	paths: {
	    'jquery': 'vendor/jquery/jquery',
	    'es5-shim': 'vendor/es5-shim/es5-shim',
	    'es5-sham': 'vendor/es5-shim/es5-sham',
	    'flight': 'vendor/flight/',
	    'd3': 'vendor/d3/d3',
	    'underscore' : 'vendor/underscore-amd/underscore'
	},
	shim: {
        d3: {
            exports: 'd3'
        }
    }
});

require(["jquery", "app/components/value","es5-shim", "es5-sham", "d3"], function($,Value) {
    Value.attachTo("#value",{});
});