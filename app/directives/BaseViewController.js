'use strict'

define(['app/sys/Sortings'], function(Sortings) {
	function BaseViewController($scope) {
		this.scope = $scope;
		this.customersSource = this.scope.model.customersSource;

		this.scope.model.sort.fields = this.sortingFields;

		if (!this.scope.model.sort.field || !this.scope.model.sort.fields.includes(this.scope.model.sort.field)) {
			this.scope.model.sort.field = this.scope.model.sort.fields[0];
		}

		this.scope.model.search.fields = (entity) => {
			return [
				[entity.fullName, (o, v) => { o.fullName = v }],
				[entity.name.first, (o, v) => { o.name.first = v }],
				[entity.name.last, (o, v) => { o.name.last = v }],
				[entity.email, (o, v) => { o.email = v }],
				[entity.phone, (o, v) => { o.phone = v }],
				[entity.department, (o, v) => { o.department = v }]
			];
		}

		if (!this.customersSource.isDataReady) {
			this.customersSource.onDataLoaded.add(this.dataLoadedHandler, this);
		} else {
			this.init()
		}
	}

	BaseViewController.prototype.init = function() {
		throw new Error('Must be implemented in derived class');
	}
		
	BaseViewController.prototype.dataLoadedHandler = function(sender, data) {
		this.init();
		this.scope.$digest();
	}

	Object.defineProperty(BaseViewController.prototype, 'sortingFields', {
		get: function() {
			return Sortings.fields;
		}
	});

	return BaseViewController
});