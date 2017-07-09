'use strict'

const servicesPaths = [
	'./UsersService'
];

define(servicesPaths, function() {
	let services = [...arguments];

	return services.reduce((collection, service) => {
		collection[service.name] = services;
		return collection;
	}, {});
})