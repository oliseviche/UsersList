'use strict'

define(['./GridViewController'], function(controller) {
	return function gridView() {
		return {
			restrict: 'E',
			templateUrl: './app/directives/grid-view/grid-view.html',
			controller: controller,
			controllerAs: 'grid',
			replace: true,
			scope: {
				users: '=',
				from: '<',
				limit: '<',
				filterWith: '<',
				direction: '<'
			}
		};
	};
})