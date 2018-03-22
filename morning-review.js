// let x = arr.forEach();       undefined
// let y = arr.map();           newarray

//reduce((accumulator, current value, i, arr) => {}, starting value)     {}contains (return accumulator + current value)


//classes

class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    passTime(){
        this.age += 1;
    }
}

class Teacher extends Student{
    constructor(name, age, teaches){
        super(name, age);
        this.classesTaught = teaches;
    }
    cry(){
        this.classesTaught = "Nothing";
    };
}

var steven = new Student('Steven', 27)

steven;

var mrSteven = new Teacher("Mr. Steven", 37, "Programming")

mrSteven;

steven.passTime();
steven;
mrSteven.passTime();
mrSteven;
mrSteven.cry();
mrSteven;
