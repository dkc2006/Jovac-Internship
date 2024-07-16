
// console.log("start");
// console.log("run after 4 seconds");
// console.log("end");

// ----------------------------------

// how can i achive async behaviour

//method -> setInterval() => delay provide

// setInterval(cb fn,timedelay)

// console.log("start");
// setInterval(function() {
//     console.log("run after 4 second");
// },4000);
// console.log("end");

//rule override -> synchronous ❌ -> js fact(synchronous fact)
//rule override -> asynchronous ✅ -> then How? -> ```Browser```


// fact sunlo  about browser (web api's -> browser ka part -> asyncronous behaviour)

// console.log() -> browser ✅ , js ❌
// setTimeout()  -> browser ✅ , js ❌
// setInterval() -> browser ✅ , js ❌
// fetch()       -> browser ✅ , js ❌
// timer         -> browser ✅ , js ❌ 
// location      -> browser ✅ , js ❌ 
// localstorage  -> browser ✅ , js ❌ 


// ----------------------------------------------------------------


// js waits for nobody

// console.log("start");
// setTimeout(function() {
//     console.log("run after 4 second");
// },4000);
// setTimeout(function() {
//     console.log("run after 2 second");
// },2000);
// console.log("end");

// order of output //start,end,run after 2 second,"run after 2 second...
// Total time taken //4 seconds

// ---------------------------

//Interview

// console.log("start");
// setTimeout(function() {
//     console.log("run after 0 second");
// },0);

// console.log("end"); 

// order of output //start,end,run after 0 second......