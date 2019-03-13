var Stud = /** @class */ (function () {
    function Stud(names, age) {
        this.names = names;
        this.age = age;
    }
    Object.defineProperty(Stud.prototype, "Names", {
        get: function () {
            return this.names;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stud.prototype, "Age", {
        get: function () {
            return this.age;
        },
        enumerable: true,
        configurable: true
    });
    return Stud;
}());
var stud = new Stud('rao', 234);
console.log(stud.Age);
