'use strict'

define(function() {
	function EditorController($scope, $location, $routeParams, usersService) {
        $scope.userType = 'User';
        $scope.selectorVisible = true;

        if ($location.path().startsWith('/user/edit/')) {
            let userId = $routeParams.id;
            
            if (userId) {
                usersService.data().then(() => {
                    $scope.model = usersService.getUserById(userId);
                    $scope.userType = $scope.model.type;
                    $scope.selectorVisible = false;
                    $scope.$apply();
                });
            }
        }
	}
	EditorController.$inject = ['$scope', '$location', '$routeParams', 'users']

	return EditorController;
});