'use strict'

define(function() {
	function ViewPanelController($scope, $routeParams, $element) {
		this.scope = $scope;
		$element.attr('data-view', $routeParams.viewId);
	}

	ViewPanelController.prototype.onSearchChanged = function() {
		this.scope.data.customersSource.search(this.scope.data.search);
	}
	
	ViewPanelController.$inject = ['$scope', '$routeParams', '$element'];

	return ViewPanelController;
})