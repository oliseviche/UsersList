requirejs.config({ 
	baseUrl: 'lib', 
	paths: { 
		'angular': 'angular.min',
		'angular-route': 'angular-route.min',
		'app': '/app'
	},
	shim: {
		'angular-route': {
			deps: ['angular']
		}
	}
});

requirejs(['app/boot']); 
