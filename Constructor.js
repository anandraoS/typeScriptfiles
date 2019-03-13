var Student = /** @class */ (function () {
    function Student(names, age) {
        this.names = names;
        this.age = age;
    }
    Student.prototype.details = function () {
        console.log(this.names);
        console.log(this.age);
    };
    return Student;
}());
var ssd = new Student('anand');
ssd.details();
