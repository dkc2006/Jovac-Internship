

function deep(){

}

let output = deep();

console.log(output); //undefined


// ----------------------------------------------------------------


async function deep(){
    console.log("1");
    setTimeout(()=>{
        console.log("setTimeout-1")
    },2000)
    console.log("2");
}

console.log("2");

