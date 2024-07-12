
//nothing => undef

// function abc() {
// }
// console.log(abc());

// -----------------
// constructor fn => obj return

// function Abc() {
// }
// console.log(new Abc());


// convention -> good practice -> construtor capital letter (not compulsion)

// -----------------------

//this => newly created object

// function Abc() {
//     this.name = "Deepanshu Khandelwal";
//     this.age = 21;
// }
// let obj1 = new Abc();
// console.log(obj1);

// let obj2 = new Abc();

// console.log(obj2);

// -------------------------------------

// function Abc(name ,age) {
//     this.name = name;
//     this.age = age;
// }
// let obj1 = new Abc("deep",42);
// console.log(obj1);

// let obj2 = new Abc("mavericks",2);

// console.log(obj2);


// ---------------------------


function Abc(name, age) {
    this.name = name;
    this.age = age;
    // this.greet = function () {
    //     console.log(`hello from ${this.name}`);
    // };
}

Abc.prototype.greet = function () {
    console.log(`hello from ${this.name}`);
};

let obj1 = new Abc("deep", 42);
console.log(obj1);
obj1.greet();

let obj2 = new Abc("mavericks", 2);
console.log(obj2);
obj2.greet();


