'use strict'

define(function() {
	function SortSelectController($scope) {
		this.scope = $scope;
		this.scope.sortField = "Name";
	}

	SortSelectController.prototype.changeDir = function() {
		this.scope.direction = this.scope.direction === "+" ? "-" : "+";
	}
	
	SortSelectController.$inject = ['$scope'];

	return SortSelectController;
})