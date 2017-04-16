'use strict'

define(['./SortSelectController'], function(controller) {
	return function sortSelect() {
		return {
			restrict: 'E',
			templateUrl: './app/directives/sort-select/sort-select.html',
			controller: controller,
			controllerAs: 'sortSelect',
			replace: true
		};
	};
})