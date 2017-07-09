'use strict'

define(['./user-editor-controller'], function(controller) {
	return function userEditor() {
		return {
			restrict: 'E',
			templateUrl: './app/directives/user-editor/user-editor-template.html',
			controller: controller,
			controllerAs: 'userEditor',
			replace: true,
            scope: {
                model: '='
            }
		};
	};
})