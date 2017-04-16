'use strict'

define(['./NavMenuController'], function(controller) {
	return function navMenu() {
		return {
			restrict: 'E',
			templateUrl: './app/directives/nav-menu/nav-menu.html',
			controller: controller,
			controllerAs: 'NavMenuCtrl',
			replace: true,
			scope: {}
		};
	};
})