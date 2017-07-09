'use strict'

define(function() {
	function UserEditorController($scope, usersService) {
		this.$scope = $scope;
        this.$scope.slaveModel = undefined;

        $scope.$watch('model', (model) => {
            if (model) {
                this.$scope.slaveModel = angular.copy(model);
                this.$scope.slaveModel.dob = new Date(this.$scope.slaveModel.dob);
            }
        });
	}
    UserEditorController.prototype.submit = function(form) {
        if (form.$valid) {
            usersService.update(this.$scope.slaveModel);
        }
    }
	UserEditorController.$inject = ['$scope', 'users'];
	
	return UserEditorController;
})