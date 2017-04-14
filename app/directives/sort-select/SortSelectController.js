'use strict'

define(function() {
	function SortSelectController($scope) {
		this.scope = $scope;
	}

	SortSelectController.prototype.changeDir = function() {
		this.scope.data.sort.dir = this.scope.data.sort.dir * -1;
		this.scope.data.customersSource.sort(this.scope.data.sort);
	}

	SortSelectController.prototype.changeField = function() {
		this.scope.data.customersSource.sort(this.scope.data.sort);
	}
	
	SortSelectController.$inject = ['$scope'];

	return SortSelectController;
})