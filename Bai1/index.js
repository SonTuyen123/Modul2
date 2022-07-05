/*
// Before use spread operator
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum.apply(null, numbers));
*/

/*
// After use spread operator
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
*/

/*
var a = [1, 2];
a.push([1, 2, 3]);
console.log(a);
*/

/*
var a = [1, 2];
a.push.apply(a,[1, 2, 3]);
console.log(a);
*/

/*
var a = [1, 2];
var b= [1,2,3];
a.push(...b);
console.log(a);
*/

/*
var a = [1, 2];
var b= [1,2,3];
a = [...b];
console.log(a);
*/

/*
var obj1={a:1, b:2};
var obj2 = {...obj1};
console.log(obj2);
*/

var a = [1, 2];
var b = [3, 4, 5];
var c = [...a, ...b];
console.log(c);