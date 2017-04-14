'use strict'

define(['../sys/Signal.js', 'app/dpa/Sorts', 'app/dpa/TextSearch'], function(Signal, Sorts, TextSearch) {
	const DEPARTMENTS = ['Developers', 'Managers', 'PR', 'Analytics', 'Unmanaged'];
	const ZONES = ['com', 'net', 'ru', 'de'];

	class DataSource {
		constructor(url) {
			this._url = url;
			this._originalData = [];
			this._originalSort = {};
			this._data = null;
			this._sort = null;
			this.onDataLoaded = new Signal();
			this.onBeforeSort = new Signal();
			this.onDataSorted = new Signal();
			this.onDataSearched = new Signal();
			this.onError = new Signal();
		}

		get url() {
			return this._url || '';
		}

		set url(value) {
			this._url = value;
		}

		get data() {
			return this._data;
		}

		get isDataReady() {
			return this._data !== null;
		}

		get sort() {
			this._sort;
		}

		sort(sortParams) {
			let beforeSortEvent = {cancel: false};
			this.onBeforeSort.dispatch(this, beforeSortEvent);

			if (beforeSortEvent.cancel) {
				return;
			}

			this._sort = sortParams;

			let dir = this._sort.dir;
			let getValue = this._sort.field.getValue;
			let comparer = this._sort.field.comparer;
			
			//Мердж стабилен и вообще, браузеры по умолчанию юзают в основном его.
			//Можно было бы QuickSort наверное, но пришлось бы на стабильность
			//заморачиваться.
			this._data = Sorts.mergeSort(this._data, (a, b) => {
				let aVal = getValue(a);
				let bVal = getValue(b);
				return comparer(aVal, bVal) * dir;
			});
			
			this.onDataSorted.dispatch(this, this.data);
		}

		preserveOriginalData() {
			if (!this._originalData.length) {
				this._originalData = this._data.slice();
			}
		}

		restoreOriginalData() {
			this._data = this._originalData;
		}

		search(search) {
			if (search.pattern) {
				this.preserveOriginalData();

				let searcher = new TextSearch.KnutMorrisPratt(search.pattern);
				let fields = search.fields;

				this._data = this._originalData.reduce((filtered, customer) => {
					let values = fields(customer);
					
					let indexis = values.reduce((container, value) => {
						let index = searcher.search(value[0]);
						if (index >= 0) {
							container.push([index, value[0], value[1]]);
						}
						return container;
					}, []);
					
					if (indexis.length) {
						let copy = angular.copy(customer);
						filtered.push(copy);

						indexis.forEach(result => {
							let modified =  result[1].slice(0, result[0]) + '<i>'+search.pattern+'</i>' + result[1].slice(result[0] + search.pattern.length);
							result[2](copy, modified);
						});
					}

					return filtered;
				}, []);
			} else {
				this.restoreOriginalData();
			}

			this.onDataSearched.dispatch(this, this.data);
		}

		fetch() {
			fetch(this.url).then(response => {
				if (response.status === 200) {
					let contentType = response.headers.get('content-type');
					if (contentType.startsWith('application/json')) {
						return response.json();
					}
				}
				throw new Error(response.status);
			})
			.then((data) => {
				let idx = 0;
				this._data = data.results.map((customer) => {
					let index = Math.random() * DEPARTMENTS.length;
					customer.department = DEPARTMENTS[index | 0];
					customer.fullName = `${customer.name.first} ${customer.name.last}`;
					index = Math.random() * ZONES.length
					customer.email = `${customer.name.first}@${customer.department.toLowerCase()}.${ZONES[index | 0]}`;
					customer.id = idx++;
					return customer;
				});
				this.onDataLoaded.dispatch(this, this.data);
			}) 
			.catch((error) => {
				this._data = null;
				this.onError.dispatch(this, error);
			});
		}
	}

	return DataSource;
})