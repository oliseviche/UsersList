'use strict'

define(['./GroupViewController'], function(controller) {
	return function groupView() {
		return {
			restrict: 'E',
			templateUrl: '/app/directives/group-view/group-view.html',
			controller: controller,
			controllerAs: 'group',
			replace: true,
			scope: {
				model: '='
			}
		};
	};
})