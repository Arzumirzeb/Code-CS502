////////////// TASK 1 //////////////

// 1.Multiply 12 with 8, and console the result:

// 2.Divide 10 by 2 add result to variables x, and console x:

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.

/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */

// 5.Console the remainder(%) when 17 is divided by 12.

// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence,console result.
console.log(12 / 8);

let x = 10 / 2
console.log(x);

let num1 = 20 
let num2 = 17
console.log(num1 + num2);

let name = "Arzu"
let surname = "Mirzabayova"
let year = "2003"
let info = `${name} ${surname} ${year}`
console.log(info);

console.log(17 % 12);

let cityName = "Baku"
console.log(cityName);
cityName = "Gence"
console.log(cityName);

////// TASK 2 //////////////

let a = 1, b = 1
let c = ++a
let d = b++
console.log(c) // 2
console.log(d) // 1
console.log(b) // 2

////////////// TASK 3 //////////////

let e = 2;
let f = 1 + (e *= 2);
console.log(f); // 5

////////////// TASK 4 //////////////

console.log('test1', test); // undefined
{
    let test = "something"
    console.log('test2', test); // something
}
console.log('test3', test);  // undefined


console.log('test1', test);  // undefined
{
    var test = "something"
    console.log('test2', test); // something
}
console.log('test3', test); // something

////////////// TASK 5 //////////////

//Find the type of all the following cases

let name1 = "Ulfat" //string
let surname1 = Zakirli //give error undefined
let year1 = 2000 //number
year = "2000" //string
let city; //undefined
let qualification = null //object
let obj = { name: 'ulfat' } //object
let arr = ['a', 'b', 'c'] //object

console.log(typeof name1);
console.log(typeof surname1);
console.log(typeof year1);
console.log(typeof year);
console.log(typeof city);
console.log(typeof qualification);
console.log(typeof obj);
console.log(typeof arr);




