'use strict'

define(['./manager-editor-controller'], function(controller) {
	return function managerEditor() {
		return {
			restrict: 'E',
			templateUrl: './app/directives/manager-editor/manager-editor-template.html',
			controller: controller,
			controllerAs: 'managerEditor',
			replace: true,
            scope: {
                model: '=?'
            }
		};
	};
})