//console.log("Hello World");

//varaible
//var age = prompt("How old are you?");
//document.getElementById("test").innerHTML = age;

//number
var num1 = 10;
num1++; //increses by 1 cause of plus sign
num1--; //decreases by 1 cause of minus sign
num1 = num1 + 10;
//console.log(50 / 2);
//console.log(num1);

// we can divide, multiply, modulus, exponent

//console.log(num1 % 6); //modulus

//function
//var age = prompt("what ur age");

//remember to add the need varable inside
function greet(age) {
  var name = "my" + " " + age;
  console.log(name);
}

//greet();

//argument function

function setNum(num1, num2) {
  var addNum = num1 + num2;
  console.log(addNum);
}

//setNum(15, 3);

//while loop

// var num = 0;

// while (num < 100) {
//   num += 1;
//   console.log(num);
// }

//for loop (it easy and the best to use instaed of while)

// for (let num = 0; num <= 50; num++) {
//   console.log(num);
// }

//data types [number='10' , string='joe', object = {first:'hey', last:'kow'}, boolean [true or false],array [apple,banana], undefined , null ]
//

//string

let fruit = "banana";
let moreFruit = "banana\napple";
console.log(moreFruit);

console.log(fruit.length);
console.log(fruit.indexOf("a"));
console.log(fruit.slice(2, 6));
console.log(fruit.replace("ban", "123"));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split("")); //split things
console.log(fruit.split(",")); //split things by comma

//Array
let friut = ["hello", "hero", "car"];
friut = new Array("hello", "hero", "car");

friut[1] = "bus";

//alert(friut[1]);

for (let i = 1; i < friut.length; i++) {
  console.log(friut[i]);
}

console.log("to house", friut.toString());

console.log(friut.join("-"));
console.log(friut, friut.pop(), friut);
console.log(friut, friut.push("cool"), friut);
console.log(friut[2]);
friut[3] = "nawa";
console.log(friut);
friut.shift();
console.log(friut);
friut.unshift("jesus");
console.log(friut);
