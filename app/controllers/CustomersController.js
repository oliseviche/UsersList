'use strict'

define(['../dao/CustomersDataSource'], function(CustomersDataSource) {
	function CustomersController($scope, $routeParams) {
		this.scope = $scope;
		this.scope.view = $routeParams.viewId;
	}
	CustomersController.$inject = ['$scope', '$routeParams']

	return CustomersController;
});