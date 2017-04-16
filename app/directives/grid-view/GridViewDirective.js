'use strict'

define(['./GridViewController', 'app/sys/utils'], function(controller, utils) {
	return function gridView() {
		return {
			restrict: 'E',
			templateUrl: './app/directives/grid-view/grid-view.html',
			controller: controller,
			controllerAs: 'grid',
			replace: true,
			scope: {
				model: '=',
				from: '<',
				limit: '<'
			},
			link: function($scope, $element, $attr, $ctrl) {
				utils.initInfiniteScrolling($scope, () => $ctrl.showMore())
			}
		};
	};
})