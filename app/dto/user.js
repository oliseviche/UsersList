'use strict'

define(['./person'], function(Person) {
    
    class User extends Person {
        constructor(name, dob, email, picture) {
            super('User', name, picture);

            this.dob = dob;
            this.email = email;
        }
    }

    return User;
})