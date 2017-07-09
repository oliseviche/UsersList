'use strict'

define(['./user-directive-controller'], function(controller) {
	return function user() {
		return {
			restrict: 'E',
			templateUrl: './app/directives/user/user-directive-template.html',
			controller: controller,
			controllerAs: 'user',
			replace: true,
            scope: {
                model: '='
            }
		};
	};
})