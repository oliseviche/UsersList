'use strict'

define(['../BaseViewController', 'app/sys/Sortings'], function(BaseViewController, Sortings) {
	function ListViewController($scope) {// extends BaseViewController {
		BaseViewController.call(this, $scope);
	}

	ListViewController.prototype = Object.create(BaseViewController.prototype);
	
	ListViewController.prototype.init = function() {
		this.customersSource.sort(this.scope.model.sort);
	}
	
	ListViewController.$inject = ['$scope'];

	return ListViewController;
})