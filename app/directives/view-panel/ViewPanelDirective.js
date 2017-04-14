'use strict'

define(['./ViewPanelController'], function(controller) {
	return function viewPanel() {
		return {
			restrict: 'E',
			templateUrl: '/app/directives/view-panel/view-panel.html',
			controller: controller,
			controllerAs: 'ViewPanelCtrl',
			replace: true
		};
	};
})