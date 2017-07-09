'use strict'

define(['./manager-controller'], function(controller) {
	return function manager() {
		return {
			restrict: 'E',
			templateUrl: './app/directives/manager/manager-template.html',
			controller: controller,
			controllerAs: 'manager',
			replace: true,
            scope: {
                model: '='
            }
		};
	};
})