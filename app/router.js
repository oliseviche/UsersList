 'use strict'

 define(['app/controllers/CustomersController'], function() {
	 return function($routeProvider, $locationProvider) {
		 	$routeProvider.when('/', {
				templateUrl: 'views/home.html',
			})
			.when('/customers/:viewId?/', {
				templateUrl: 'views/customers.html',
				controller: 'CustomersController',
			})
			.otherwise({
				redirectTo: '/'
			});

			$locationProvider.hashPrefix('!');
		}
	}
)