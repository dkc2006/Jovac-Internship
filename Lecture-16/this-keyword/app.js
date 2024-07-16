

// this -> 5 types

// 1. regular function invocation/
// 2. method invocation
// 3. constructor function invocation
// 4.indirect invocation
// 5. arrow function invocation
// ----------------------------------------------------------------

// ```this depends on hoe it is being called upon```

// ---------------------------------------------------

// 1. regular function invocation

// function regularFunc(){
//     console.log(this); // kaise chal raha hai
// }

// regularFunc(); // regular function call


// ---------------------------------------

// 2. method invocation => object in which the method is defined


// let object = {
//     a:10,
//     fn: function(){
//         console.log(this); // kaise chal raha hai->object
//     }
// }

// object.fn();//dependent on object -> // method invocation

// ----------------------------------------------------------------


// let object = {
//     a:20,
//     b: function(){
//         console.log(this); // kaise chal raha hai->object
//     }
// }

// let bro = object.b; 
// bro(); // regular -> window

// ----------------------------------------------------------------


let object = {
    s:20,
    fn: function(){
        console.log(this);//window
        function b() { 
            console.log(this); //window
        }
        b(); 
    }
}

let bro = object.fn; 
bro();
