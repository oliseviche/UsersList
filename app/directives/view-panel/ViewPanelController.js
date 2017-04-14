'use strict'

define(function() {
	function ViewPanelController($scope) {
		this.scope = $scope;
	}

	ViewPanelController.prototype.onSearchChanged = function() {
		this.scope.data.customersSource.search(this.scope.data.search);
	}
	
	ViewPanelController.$inject = ['$scope'];

	return ViewPanelController;
})