//1. getElementByTagName
let selectedEl = document.getElementsByTagName('h1');
console.log(selectedEl);

//2.getElementById

let selectedEl2 = document.getElementById('deep');
console.log(selectedEl2);

//3.getElementByClassName

let selectedEl3 = document.getElementsByClassName('heading');
console.log(selectedEl3);

//4. querySelector (select the first occurance)

document.querySelector('h1'); //tag,class,id.
document.querySelector('.deepu')
document.querySelector('#deep')

//5. querySelectorAll (select all occurances)

document.querySelectorAll('h1'); //tag,class,id.
document.querySelectorAll('.deepu')
document.querySelectorAll('#deep')

