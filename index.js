// var: ye ham redeclare bhi krsaktay hay aur value change bhi
var firstVar = 23;
firstVar = 88; // chnge value
var firstVar = 59; //redclare
//console.log(firstVar);

// let: ye redclare nhi hota but value change hoti hay
let secondVar = 54;
secondVar = 87;
//let secondVar = 12; //error
//console.log(secondVar);

//const: na tw redclare aur na hi value change
const thirdVar = 55;
//const thirdVar=5; //error
//thirdVar = 77; //error
//console.log(thirdVar);

//print statement
let firstName = "hasham";
//console.log(firstName);
let obj1 = {
  firstName: "hasham",
  lastName: "uddin",
  dob: "2000-09-07",
};

//console.table(obj1);
//console.warn(firstName);
//console.error("there is a error");

let studentName = "Azhar";
let studentLastName = "Uddin";
//console.log(`Student Name is ${studentName} ${studentLastName}`); // this is string literals

// Arithmetic operator

// +
//console.log(22 + 77);
//console.log("22" + "77"); 2277
//console.log(22 + "77"); 2277;

// -
//console.log(33 - 90); //-57
//console.log("33" - "90"); //-57
//console.log(33 - "90"); //-57

// *
// console.log(33 * 90); //2970
// console.log("33" * "90"); //2970
// console.log(33 * "90"); //2970

// /
// console.log(33 / 90); //0.36666666666666664
// console.log("33" / "90"); //0.36666666666666664
// console.log(33 / "90"); //0.36666666666666664

// Data Types

// string
const strData = "javascript";
//console.log("strData", typeof strData);

// number
const numberData = 568595;
//console.log(`numberData ${typeof numberData}`);

// boolean
const boolData = false;
//console.log(`boolData ${typeof boolData}`);

// array
const arrayData = [1, 8, 5];
//console.log(`arrayData ${typeof arrayData}`);

// object
const objData = { langName: "javascript" };
//console.log("objData", typeof objData);

// null
const nullData = null;
//console.log("nullData", typeof nullData);

// undefined
const undData = undefined;
//console.log("undData", typeof undData);

// homework
//console.log(3 > 2 > 1);  why it is false? jab k true hona chahye

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

const studentArr = ["hasham", "ali", "ahmed", "bilal"];
// for (let i = 0; i < studentArr.length; i++) {
//   console.log(studentArr[i]);
// }

const studentArrOfObj = [
  {
    firstName: "hasham",
    secondName: "uddin",
    dob: "2000-09-07",
  },
  {
    firstName: "azhar",
    secondName: "khan",
    dob: "2001-12-07",
  },
  {
    firstName: "ali",
    secondName: "ahmed",
    dob: "2000-09-08",
  },
];

for (let j = 0; j < studentArrOfObj.length; j++) {
  // console.table(studentArrOfObj[j]);
}

let i = 2;
while (i < studentArrOfObj.length) {
  //console.table(studentArrOfObj[i]);
  i++;
}

console.log("from while loop", i); // no error print krwa dega because iska scope globally poori file tak ka hay
//console.log("from for loop", j);  // error because iska scope sirf for ki body k andar tak ka hay
