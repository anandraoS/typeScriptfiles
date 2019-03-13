var AS = /** @class */ (function () {
    function AS(names, age) {
        this.names = names;
        this.age = age;
    }
    // constructor(names?,age?){
    //     this.names = names;
    //     this.age = age;
    //     }
    //     names: string;
    //     age: number;
    AS.prototype.details = function () {
        console.log(this.names);
        console.log(this.age);
    };
    return AS;
}());
var ssasd = new AS('anand');
ssasd.details();
