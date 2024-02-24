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

//console.log("from while loop", i); // no error print krwa dega because iska scope globally poori file tak ka hay
//console.log("from for loop", j);  // error because iska scope sirf for ki body k andar tak ka hay

// Methods Of Array

// push
// sab se akhiri may insert krdeta hay.

const employeeData = ["hasham", "azhar", "ali"];
//console.log("before push", employeeData);
employeeData.push("khalid");
//console.log("after push", employeeData);

//pop
// akhiri walay ko remove krdeta hay
employeeData.pop();
//console.log("after pop", employeeData);

//includes
// agar hamay maloom krna ho k kia ye element array may mojood hay ya nhi
// agar mojood hay tw true wrna false
// console.log(employeeData.includes("ahmed"));
// console.log(employeeData.includes("hasham"));

//map
// agar saray element may koi operation perform krna ho
// original array remains same
const numArray = [2, 3, 99, 77];
// console.log(numArray.map((num) => num * 10));
// console.log(numArray);

//filter
// agar array may koi filteration krni ho
// original array remain same
// console.log(numArray.filter((num) => num > 30));
// console.log(numArray);

//reference of value
let var1 = 5;
let var2 = var1;
var2 = 86;
// console.log(var1);
// console.log(var2);

// refrence of location
let arr1 = [1, 2, 3, 4];
let arr2 = arr1;
arr2.push(88);
console.log(arr1);
console.log(arr2);

// copy of array
let arr3 = Array.from(arr1);
//console.log(arr3);
arr3.push(153);
//console.log(arr3);

let obj2 = {
  firstName: "hasham",
  lastName: "uddin",
};
let obj3 = Object.assign({}, obj2);
//console.log(obj3);

// print all keys
//console.log(Object.keys(obj3));
// print all values
//console.log(Object.values(obj3));

// logic building
const arrNum = [2, 5, 6, 0, -5, -2, 10, 8];
// console.log(Math.max(...arrNum));
let maxNum = 0;
for (let i = 0; i < arrNum.length; i++) {
  if (maxNum < arrNum[i]) {
    maxNum = arrNum[i];
  }
}
console.log(maxNum);

//Task

// 1- Apnay ek odd number ki array leli.. aur usme se middle element
// nikalna hay without sing any built in method
// 2- Apnay array ki length maloom krni hay

const arr4 = [1, 8, 5, 6, 7];

let obj4 = {
  firstName: "hasham",
  lastName: "uddin",
  firstName: "azhar",
};

obj4.dob = "2000-09-07";
obj4["age"] = 23;
obj4["age"] = 85;
console.log(obj4);
