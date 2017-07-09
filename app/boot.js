'use strict'

define(['angular', 'angular-route', './router', './controllers/Activator', 
		'./directives/Activator', './services/Activator'], 
function (ng, ngr, router, controllersActivator, directivesActivator, servicesActivator) {
	const APP_NAME = "KLapp";
	const appModule = angular.module(APP_NAME, ['ngRoute']).config(function($sceProvider) {
		$sceProvider.enabled(false);
	});

	function Application() {}

	Application.prototype.init = function() {
		Object.keys(servicesActivator).forEach(key => appModule.factory(key, servicesActivator[key]));
		Object.keys(controllersActivator).forEach(key => appModule.controller(key, controllersActivator[key]));
		Object.keys(directivesActivator).forEach(key => appModule.directive(key, directivesActivator[key]));

		appModule.config(router);
		angular.bootstrap(document, [APP_NAME]);
	};
	
	new Application().init()
});