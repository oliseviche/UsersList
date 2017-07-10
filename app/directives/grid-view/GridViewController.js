'use strict'

define(function() {
	function GridViewController($scope, $location, usersService) {
		this.$scope = $scope;
		this.$scope.filter = this.filterMethod.bind(this);
		this.location = $location;
		this.usersService = usersService;
	}
	GridViewController.prototype.filterMethod = function(value) {
		let filterValue = this.$scope.filterWith;

		if (filterValue.startsWith('t:') || filterValue.startsWith('type:')) {
			filterValue = filterValue.substr(filterValue.indexOf(':')+1);
			return value.type.startsWith(filterValue);
		}
		
		return value.name.startsWith(filterValue);
	}
	GridViewController.prototype.handleClick = function($event) {
		let target = $event.target;
		if (target.tagName.toLowerCase() === 'a' &&
			target.dataset['cmd'] === 'delete' &&
			target.dataset['id'] !== '') {
				$event.preventDefault();
				let result = window.confirm("Do you really want to delete user?");
				if (result) {
					this.usersService.delete(target.dataset['id']);
				}
			}
	}
	GridViewController.prototype.createUser = function() {
		this.location.path('/user/create');
	}

	GridViewController.$inject = ['$scope', '$location', 'users'];
	
	return GridViewController;
})