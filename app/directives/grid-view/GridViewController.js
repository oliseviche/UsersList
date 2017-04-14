'use strict'

define(['../BaseViewController', 'app/sys/Sortings'], function(BaseViewController, Sortings) {
	function GridViewController($scope) {
		BaseViewController.call(this, $scope);
	}

	GridViewController.prototype = Object.create(BaseViewController.prototype);

	GridViewController.prototype.init = function() {
		this.customersSource.sort(this.scope.model.sort);
	}

	Object.defineProperty(GridViewController.prototype, 'sortingFields', {
		get: function() {
			return [Sortings.fields[0], Sortings.fields[2], Sortings.fields[3]];
		}
	});

	GridViewController.$inject = ['$scope'];
	
	return GridViewController;
})