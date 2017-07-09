'use strict'

define(['../dao/CustomersDataSource'], function(CustomersDataSource) {
    class usersService {
        constructor() {
            this.customersSource = new CustomersDataSource('https://randomuser.me/api/?results=50');
            this.fetchPromise = null;
        }
        data() {
            if (!this.fetchPromise) {
                this.fetchPromise = this.customersSource.fetch();
            }
            return this.fetchPromise;
        }
        delete(id) {
            this.customersSource.delete(id);
        }
        getUserById(id) {
            return this.customersSource.find(id);
        }
        update(model) {
            debugger;
        }
    }

    return function users() {
        return new usersService();
    }
});