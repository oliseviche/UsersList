 'use strict'

 define(['app/controllers/UsersController', 'app/controllers/EditorController'], function() {
	 return function($routeProvider, $locationProvider) {
		 	$routeProvider
			 .when('/', {
				templateUrl: 'views/users.html',
				controller: 'UsersController'
			})
			.when('/user/edit/:id/', {
				templateUrl: 'views/editor.html',
				controller: 'EditorController'
			})
			.otherwise({
				redirectTo: '/'
			});

			$locationProvider.hashPrefix('!');
		}
	}
)