let arr = [10,20,30,40,50];
let arr2 = [10,200,300,400,500];

//concate
let arr3 = arr.concat(arr2);
console.log(arr3);

//last mei add karna hai
arr2.push(900);
console.log(arr2);

//first add karna hai

arr.unshift(0,1,2,3);
console.log(arr);

// -------------------------------

//[0, 1, 2, 3, 10, 20, 30, 40, 50]

//last remove

//last remove -> single value
arr.pop()
console.log(arr);

//Start remove -> single value

arr.shift();
console.log(arr);