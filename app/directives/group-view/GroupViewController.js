'use strict'

define(['../BaseViewController', 'app/dpa/Sorts', 'app/sys/Sortings'], function(BaseViewController, Sorts, Sortings) {
	class Group {
		constructor(name) {
			this.name = name;
			this.members = [];
		}

		add(member) {
			this.members.push(member);
		}

		clear() {
			this.members = [];
		}

		count() {
			return this.members.length;
		}
	};

	function GroupViewController($scope) {
		BaseViewController.call(this, $scope);
	}

	GroupViewController.prototype = Object.create(BaseViewController.prototype)

	GroupViewController.prototype.init = function() {
		this.scope.groups = [];

		this.scope.model.customersSource.onBeforeSort.add(this.beforeSortHandler, this);
		this.scope.model.customersSource.onDataSorted.add(this.dataSortedHandler, this);
		this.scope.model.customersSource.onDataSearched.add(this.dataSearchedHandler, this);

		this.scope.$on('$destroy', () => {
			this.scope.model.customersSource.onBeforeSort.remove(this.beforeSortHandler, this);
			this.scope.model.customersSource.onDataSorted.remove(this.dataSortedHandler, this);
			this.scope.model.customersSource.onDataSearched.remove(this.dataSearchedHandler, this);
		})

		this.customersSource.sort(this.scope.model.sort);
	}

	GroupViewController.prototype.beforeSortHandler = function(sender, evt) {
		if (this.scope.model.sort.field === Sortings.fields[3]) {
			evt.cancel = true;
			this.updateGroups();
		}
	}

	GroupViewController.prototype.dataSortedHandler = function (sender, data) {
		this.updateGroups();
	}

	GroupViewController.prototype.dataSearchedHandler = function (sender, data) {
		this.updateGroups();
	}

	GroupViewController.prototype.updateGroups = function() {
		this.clearGroups();
		this.fillGroups();

		let dir = this.scope.model.sort.field !== Sortings.fields[3] ? 1 : this.scope.model.sort.dir;
		this.scope.groups = Sorts.mergeSort(this.scope.groups, (a, b) => {
			return a.name.localeCompare(b.name) * dir
		});
	}

	GroupViewController.prototype.clearGroups = function() {
		this.scope.groups.forEach(group => group.clear());
	}

	GroupViewController.prototype.fillGroups = function() {
		this.scope.model.customersSource.data.forEach(customer => {
			let department = customer.department;
			let group = this.scope.groups.find(group => group.name === department);

			if (!group) {
				group = new Group(department);
				this.scope.groups.push(group);
			}

			group.add(customer);
		});
		
		this.scope.groups = this.scope.groups.filter(group => group.count());
	}

	GroupViewController.$inject = ['$scope'];
	
	return GroupViewController;
})