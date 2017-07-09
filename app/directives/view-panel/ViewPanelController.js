'use strict'

define(function() {
	function ViewPanelController($scope) {
		this.scope = $scope
	}
	
	ViewPanelController.$inject = ['$scope'];

	return ViewPanelController;
})