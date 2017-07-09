'use strict'

define(function() {
	function EditorController($scope, $routeParams, usersService) {
        let userId = $routeParams.id;
        if (userId) {
            usersService.data().then(() => {
                $scope.model = usersService.getUserById(userId);
                $scope.$apply();
            });
        }
	}
	EditorController.$inject = ['$scope', '$routeParams', 'users']

	return EditorController;
});