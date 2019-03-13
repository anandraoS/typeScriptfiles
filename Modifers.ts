class AS{
    constructor( private names?:String, private age?: number){
    }
    // constructor(names?,age?){
    //     this.names = names;
    //     this.age = age;
    //     }
    //     names: string;
    //     age: number;
    details()
    {
        console.log(this.names);
        console.log(this.age);
    }
    }
    
    let ssasd = new AS('anand');
    ssasd.details();
    