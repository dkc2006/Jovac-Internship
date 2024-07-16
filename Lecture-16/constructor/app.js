// function deep(){

// }
// console.log(deep()); // undefined


// -------------------------------------

// function deep(){

// }
// console.log(new deep()); //deep {}

// --------------------------------------------

//convention not compulsion (capital letter)
// function Deep(){

// }
// console.log(new Deep()) //{}

// ----------------------------------------------------------------

// function Deep(){
//     this.name = "Deep";
//     this.age = 42;
// }
// console.log(new Deep());


// -----------------------------------------

// function Deep(){
//     this.name = "Deep";
//     this.age = 42;
//     this.fn = function(){
//         console.log(`hello from ${this.name}`);
//     }
// }
// console.log(new Deep());
// console.log(new Deep());

//-----------------------------------------

//prototype => function faikdo

function Deep(){
    this.name = "Deep";
    this.age = 42;
    // this.fn = function(){
    //     console.log(`hello from ${this.name}`);
    // }
}
Deep.prototype.fn = function(){
    console.log(`hello from ${this.name}`);
}
console.log(new Deep());
console.log(new Deep().fn());