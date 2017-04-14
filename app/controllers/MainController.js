'use strict'

define(['../dao/CustomersDataSource'], function(CustomersDataSource) {
	function MainController($scope) {
		this.customersSource = new CustomersDataSource('https://randomuser.me/api/?results=400');
		this.customersSource.onError.add(this.onErrorHandler, this);
			
		this.customersSource.fetch();

		this.scope = $scope;
		this.scope.data = {
			customersSource: this.customersSource,
			sort: { 
				fields: [],
				field: null,
				dir: 1
			},
			search: {
				pattern: '',
				fields: []
			}
		}
	}
	
	MainController.prototype.onErrorHandler = function(sender, error) {
		console.error('Failed to fetch customers', error);
	}

	MainController.$inject = ['$scope']

	return MainController;
});