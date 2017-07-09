'use strict'

define(['./MainController', './UsersController', './EditorController'], function() {
	let controllers = [...arguments];
	
	return controllers.reduce((collection, controller) => {
		collection[controller.name] = controller;
		return collection;
	}, {});
})