'use strict'

define(function() {
	function UsersController($scope, $routeParams, users) {
		$scope.users = [];
		$scope.filter = "";
		$scope.direction = "+";

		users.data().then((users) => {
			$scope.users = users;
			$scope.$apply();
		});
	}
	UsersController.$inject = ['$scope', '$routeParams', 'users']

	return UsersController;
});