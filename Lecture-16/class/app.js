// class Person{

// }


// ------------------------------

// class Person{
//     constructor(){

//     }
// }

// ------------------

// class Person{
//     constructor(){
        
//     }
// }

// let p1 = new Person();
// let p2 = new Person();


// ------------------------------


// class Person{
//     constructor(naam,mail,shadi){
//         this.naam = naam;
//         this.mail = mail;
//         this.isMarried = shadi;
        
//     }
// }

// let p1 = new Person('deep','deep@example.com',true);
// let p2 = new Person('mav','mav@example.com',false);
// console.log(p1,p2);

// ----------------------------------


class Person{
    constructor(naam,mail,shadi){
        this.naam = naam;
        this.mail = mail;
        this.isMarried = shadi;
        
    }

    khaoPiyo(){
        console.log(`hello form ${this.naam}`);
    }
}

let p1 = new Person('deep','deep@example.com',true);
let p2 = new Person('mav','mav@example.com',false);
console.log(p1,p2);
console.log(p1.khaoPiyo(),p2.khaoPiyo());


// -----------------------------

class Student extends Person{}

let s1 = new Student('sudhir','sudhir@example.com',true);

console.log(s1);


// ----------------------------------------------------------------

// inheritance

class Person{
    constructor(naam,mail,shadi){
        this.naam = naam;
        this.mail = mail;
        this.isMarried = shadi;
    }

    khaoPiyo(){
        console.log(`hello form ${this.naam}`);
    }
}

class Student extends Person{
    //name,email,isMarried,roll number

    constructor(naam,mail,shadi,rollNumber){
        super(naam,mail,shadi);
        this.rollNumber = rollNumber;
    }
    aishKaro(){
        console.log(`bye from ${this.naam}`);
    }
    khaoPiyo(){
        super.khaoPiyo();
        console.log(`tata form student ${this.naam}`);
    }
}