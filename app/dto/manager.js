'use strict'

define(['./person'], function(Person) {
    
    class Manager extends Person {
        constructor(name, picture, rights) {
            super('Manager', name, picture);
            this.rights = rights;
        }
    }

    return Manager;
})