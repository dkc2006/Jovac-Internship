

// var a = 10;

// function deep(){
//     console.log(a);
// }
// deep();
// console.log(a);


// -------------------------------

//global / script -> block ke andar nhi hai

// var a = 10;// global variable
// let b = 100; //script
// const c = 1000; //script

// swarg -> function / block

// function deep() {
//     var c = 20; // functional variable
//     let b = 100; // block 
//     const c = 1000; // block
// }


// *--------------------

// var -> global , function

// let a = 1; // script variable
// var b = 10; // global variable
// const c = 1000; // script variable

// if(true){
//     var d = 1; // global variable
//     let e = 2; // block variable
//     const f = 100; // block variable

// }

//{} //block scope ,function{} //functional scope

// ----------------------------------------------------------------

// var a = 10; 
// console.log(a); // 1 -> 10 

// function b(){
//     console.log(a) //3 ->  10
//     a = 20;
//     console.log(a) //4 -> 20
// }

// console.log(a);  // 2 -> 10
// b()
// console.log(a); //5 -> 20

// ----------------------------------------------------------------


// var a = 10; //global
// console.log(a); // 1 -> 10

// function b(){
//     console.log(a) //3 -> undefined
//     var a = 20; //func
//     console.log(a) //4 -> 20
// }
// console.log(a);  // 2 -> 10
// b()
// console.log(a); //5 -> 10


// ----------------------------------------------------------------

// var a = 10; //global
// console.log(a); // 1 -> 10

// if(true){
//     console.log(a) //2 -> 10
//     var a = 20; //global
//     console.log(a) //3 -> 20
// }

// console.log(a);  // 4 -> 20

// ----------------------------------------------------------------

// let a = 10; //script
// console.log(a); // 1 -> 10

// if(true){
//     console.log(a) //2 -> error
//     let a = 20; //block
//     console.log(a) //3 -> ❌
// }

// console.log(a);  // 4 -> ❌