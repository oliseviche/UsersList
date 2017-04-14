'use strict'

define(['./ListViewController', 'app/sys/utils'], function(controller, utils) {
	return function listView() {
		return {
			restrict: 'E',
			templateUrl: '/app/directives/list-view/list-view.html',
			controller: controller,
			controllerAs: 'list',
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