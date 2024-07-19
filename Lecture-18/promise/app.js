
let promise = new Promise (function(resolve,reject){

    setTimeout(function(){

        let data = "hi i am working on promise"
        resolve (data);

        let err = "oops data to nahi mila"
        reject(err);
    },4000)
}); // constructor function


promise.then(function(data){
    console.log(data);
})


.catch(function(err){
    console.log(err);
});