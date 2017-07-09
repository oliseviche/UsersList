define(function() {
    let id = 0;
    class Person {
        constructor(type, name, picture){
            this.type = type;
            this.name = name;
            this.id = id++;
            this.picture = picture;
        }
    }

    return Person;
})