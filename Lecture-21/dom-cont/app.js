// let h1 = document.getElementsByTagName('h1');
// let classH1 = document.getElementsByClassName('deep');
// let idH1 = document.getElementById('deepu');

// let q1 = document.querySelector('h1')
// let q2 = document.querySelector('.deep')
// let q3 = document.querySelector('#deepu')



// q1.style.color = 'blue'
// q1.style.color = 'red'
// q2.style.backgroundColor = "orange"

// -----------------------

// h1.style.color = "red"

//wet (write everything twice)
// for(let heading of h1){
//     heading.style.color = 'red';
//     heading.style.backgroundColor = 'green';
//     heading.style.fontSize = '24px';
// }

// dry (donot repeat yourself)
// for(let heading of h1){
//     heading.style.cssText = `
//     font-size:50px;
//     color:pink;
//     background-color:blue
//     `
// }


// ---------------

// get an attribute
// let a = document.querySelector('a')
let inp = document.querySelector('input')
// console.log(a.getAttribute('href'))s
console.log(inp.getAttribute('type'))


//set an attribute
let a = document.querySelector('a')
a.setAttribute('href' , 'http://youtubee.com')
console.log(a.getAttribute('href'))
