class Stud{
    constructor(names?,age?){
    this.names = names;
    this.age = age;
    }
    private names: string;
    private age: number;
    get Names(){
        return this.names;
    }
    get Age(){
        return this.age;
    }
}
let stud =new Stud('rao',234);
console.log(stud.Age);
