'use strict'

define(['../dto/manager', '../dto/user', 'app/ddo/rights'], function(Manager, User, accessRights) {
	const ZONES = ['com', 'net', 'ru', 'de'];
	const TYPE = ['User', 'Manager'];

	class DataSource {
		constructor(url) {
			this.url = url;
			this._data = null;
		}

		getAccessRights() {
			let count = (Math.random() * accessRights.length + 1) | 0;
			let ar_copy = [...accessRights];
			let result = [];

			for (let i=0; i < count; i++) {
				let index = (Math.random() * (count - i)) | 0;
				let right = ar_copy.splice(index, 1);
				ar_copy.push(right[0]);
				result.push(right[0]);
			}

			return result;
		}

		fetch() {
			return fetch(this.url).then(response => {
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
				this._data = data.results.map((user) => {
					if (Math.random() > 0.5) {
						return new User(`${user.name.first} ${user.name.last}`, user.dob.split(' ')[0], user.email, user.picture.large);
					} else {
						return new Manager(`${user.name.first} ${user.name.last}`, user.picture.large, this.getAccessRights());
					}
				});
				return this._data;
			});
		}

		find(id) {
			return this._data.filter((entity) => entity.id == id)[0];
		}
		
		add(model) {
			this._data.push(model);
		}

		update(model) {
			let entry = this._data.find(entity => entity.id == model.id);
			if (entry) {
				angular.copy(model, entry);
			}
		}

		delete(id) {
			angular.copy(this._data.filter((entity) => entity.id != id), this._data);
		}
	}

	return DataSource;
})