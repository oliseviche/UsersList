'use strict'

define(['app/ddo/rights', 'app/dto/manager'], function(rights, Manager) {

    function filterRights(model) {
        return rights.filter((entry) => {
            let hasRight = model.rights.find((a) => a.id === entry.id);
            return !hasRight;
        });
    }

	function ManagerEditorController($scope, $location, usersService) {
		this.$scope = $scope;
        this.$scope.slaveModel = new Manager('', '', []);
        this.$scope.rights = rights;
        this.$location = $location;
        this.usersService = usersService;
        this.createMode = true;
        
        $scope.$watch('model', (model) => {
            if (model) {
                this.$scope.slaveModel = angular.copy(model);
                this.$scope.rights = filterRights(this.$scope.slaveModel);
                this.createMode = false;
            }
        });
	}
    ManagerEditorController.prototype.submit = function(form) {
        if (form.$valid) {
            let slave = {};

            angular.copy(this.$scope.slaveModel, slave);

            if (this.createMode) {
                let manager = new Manager(slave.name, '', slave.rights);
                this.usersService.add(manager);
            } else {
                this.usersService.update(slave);
            }

            this.$location.path('/');
        }
    }
    ManagerEditorController.prototype.addRight = function() {
        if (this.$scope.selectedRight) {
            this.$scope.slaveModel.rights.push(this.$scope.selectedRight);
            this.$scope.rights = filterRights(this.$scope.slaveModel);
        }
    }
    ManagerEditorController.prototype.removeRight = function($event) {
        if ($event.target.tagName.toLowerCase() === "button") {
            let id = $event.target.dataset['rightId'];
            if (id) {
                angular.copy(this.$scope.slaveModel.rights.filter(e => e.id != id), this.$scope.slaveModel.rights);
                this.$scope.rights = filterRights(this.$scope.slaveModel);
            }
        }
    }
	ManagerEditorController.$inject = ['$scope', '$location', 'users'];
	
	return ManagerEditorController;
})