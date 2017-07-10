'use strict'

define(['../dao/CustomersDataSource'], function(CustomersDataSource) {
    class usersService {
        constructor() {
            this.customersSource = new CustomersDataSource('https://randomuser.me/api/?results=10');
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
            this.customersSource.update(model);
        }
        add(model) {
            this.customersSource.add(model);
        }
    }

    return function users() {
        return new usersService();
    }
});