class Student{
constructor(names?,age?){
this.names = names;
this.age = age;
}
names: string;
age: number;

details()
{
    console.log(this.names);
    console.log(this.age);
}
}

let ssd = new Student('anand');
ssd.details();
