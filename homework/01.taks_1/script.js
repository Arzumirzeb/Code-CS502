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
//let surname1 = Zakirli //give error undefined
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

////////////// TASK 6 //////////////
const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1'
// 2.Add two numbers (10,88) to end of arr1 (push methods)
// 3.Remove first two numbers from arr1
// 4.Add three numbers (0,9,11) in front of arr1(unshift)
// 5.Remove four numbers in front of arr1(shift)
let sum = 0
arr1.map(i => sum += i)
console.log(sum);

arr1.push(10)
arr1.push(88)
arr1.shift()
arr1.shift()
arr1.unshift(11)
arr1.unshift(9)
arr1.unshift(0)
arr1.shift()
arr1.shift()
arr1.shift()
arr1.shift()
console.log(arr1);

////////////// TASK 7 //////////////
const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// 1.Console values from "Rufet" to "Fuad"
console.log(arr2.slice(arr2.findIndex(i => i == "Rufet"), arr2.findIndex(i => i == "Fuad") + 1));
// 2.Change Gulshen to Rovshen
const index = arr2.findIndex(name => name == "Gulshen")
if (index) arr2[index] = "Rufet"
console.log(arr2);
// 3.Console each name with map
arr2.map(name => console.log(name));
// 4.Console only names which is Anar
console.log(arr2.find(name => name === "Anar"));
// 5.Console all names where name is Anar change it to "Perviz"
const newarr = arr2.map(name => {
  if (name === "Anar") return "Perviz"
  return name;
});
console.log(newarr);
// 6.Console second to last value of arr2
console.log(arr2[arr2.length - 2]);
// 7.Console length of arr2
console.log(arr2.length);


////////////// TASK 8 //////////////
const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// (use typeof), like this: filter((item) => typeof item === 'string')

// 1.Show only numbers
console.log(arr3.filter(i => typeof i === "number"));
// 2.Show only true values
console.log(arr3.filter(i => i));
// 3.Show only false values
console.log(arr3.filter(i => !i));
// 4.Show only strings
console.log(arr3.filter(i => typeof i === "string"));


////////////// TASK 8 //////////////
const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// 1.Console (only even numbers) 
console.log(numbers.filter(i => i % 2 === 0));
// 2.Console (only odd numbers)
console.log(numbers.filter(i => i % 2 === 1));

////////////// TASK 9 //////////////
const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)

// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]
const newarr2 = arr4.map(i =>{
  if (typeof i === "number") return i + 10;
  else if (typeof i === "string") return i + " is string";
  else if (!i) return i + " is falsy value"
})
console.log(newarr2);

// 2.Sum all numbers of arr4
console.log(arr4.filter(i => typeof i === "number").reduce((acc, curr) => acc + curr))

// 3.Count only the values that are true
console.log(arr4.filter(i => i).length);

// 4.Count only the values that are string
console.log(arr4.filter(i => typeof i === "string").length);

// 5.Count only the values that are false
console.log(arr4.filter(i => !i).length);

////////////// TASK 10 //////////////
// 1.Create a object add your name, surname, age and city.
const obj3 = {
  name: "Arzu",
  surname: "Mirzabayova",
  age: "20",
  city: "Baku"
}
// 2.Then change name to "Jhon"
obj3.name = "Jhon"
console.log(obj3);



const obj2 = {
    email: 'ulfat@gmail.com',
    info: {
        gender: 'Male',
        loc: {
            city: "Baku",
            street: 'Nizami 22',
            education: {
                "uni name": "ADNSU",
            }
        }
    }
}

// 3.Console gender
console.log(obj2.info.gender);
// 4.Console city
console.log(obj2.info.loc.city);
