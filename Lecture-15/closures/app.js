//closure ❌

// function a() { 
//     let b = 100;
//     function d() {
//         console.log(b);  
//     }
//     d();
// }
// let out = a();
// out();


//closure ✅
function a() { 
    let b = 100;
    function d() {
        console.log(b);  
    }
   return d;//RETURN
}
let out = a();
out();