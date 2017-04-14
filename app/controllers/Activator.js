'use strict'

define(['./MainController', './CustomersController'], function() {
	let controllers = [...arguments];
	
	return controllers.reduce((collection, controller) => {
		collection[controller.name] = controller;
		return collection;
	}, {});
})