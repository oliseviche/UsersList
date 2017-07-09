'use strict'

define(function() {
	function MainController(usersService) {
		usersService.data();
	}
	MainController.$inject = ['users']
	return MainController;
});