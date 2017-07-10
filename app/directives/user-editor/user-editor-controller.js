'use strict'

define(['app/dto/user'], function(User) {
    function formatDate(date) {
        let year = date.getFullYear() + '';
        let month = (date.getMonth() + 1) + '';
        let day = date.getDate() + '';

        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
    
	function UserEditorController($scope, $location, usersService) {
		this.$scope = $scope;
        this.$scope.slaveModel = undefined;
        this.$location = $location;
        this.usersService = usersService;
        this.createMode = true;

        $scope.$watch('model', (model) => {
            if (model) {
                this.$scope.slaveModel = angular.copy(model);
                this.$scope.slaveModel.dob = new Date(this.$scope.slaveModel.dob);
                this.createMode = false;
            }
        });
	}
    UserEditorController.prototype.submit = function(form) {
        if (form.$valid) {
            let slave = {};
            angular.copy(this.$scope.slaveModel, slave);
            slave.dob = formatDate(slave.dob);

            if (this.createMode) {
                let newUser = new User(slave.name, slave.dob, slave.email, '');
                this.usersService.add(newUser);
            } else {
                this.usersService.update(slave);
            }

            this.$location.path('/');
        }
    }
	UserEditorController.$inject = ['$scope', '$location', 'users'];
	
	return UserEditorController;
})