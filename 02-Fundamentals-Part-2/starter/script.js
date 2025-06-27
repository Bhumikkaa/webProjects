// function square(a, b) {
//   const value = `a square is ${a * a} and b square is ${b * b}`;
//   return value;
// }
// const result = square(2, 3);
// console.log(result);

// // arrow function
// // way 1
// const square1 = (a, b) => {
//   const value1 = `a square is ${a * a} and b square is ${b * b}`;
//   return value1;
// };
// const result1 = square1(2, 3);
// console.log(result1);

// // way 2
// const square2 = (a, b) => {
//   `a square is ${a * a} and b square is ${b * b}`;
// };
// const result2 = square1(2, 3);
// console.log(result2);

// const calAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calAverage(3, 4, 5));
// //   const scoreDolphin = calAge(a, b, c);
// //   const scoreKolas = calAge(a, b, c);
// //   return "the average score ${averageScore}";

// const scoreDolphin = calAverage(44, 23, 71);
// const scoreKolas = calAverage(85, 54, 41);
// console.log(scoreDolphin, scoreKolas);
// // const scoreDolphin=calAge(a,b,c)
// // const scoreKolas=calAge(a,b,c)

// const checkWinner = function (avgDolphins, avgkolas) {
//   if (scoreDolphin >= scoreKolas) {
//     console.log(`Dolphins win!(${avgDolphins}vs${avgkolas})`);
//   } else if (scoreKolas >= 2* scoreDolphin) {
//     console.log(`kohals win!(${avgDolphins}vs${avgkolas})`);
//   } else {
//     console.log("no team Wins...");
//   }
// }
//  checkWinner(scoreDolphin, scoreKolas);

// ;

///////////////////////////////////////////
//objects
// const shami = {
//   firstName: "shamitha",
//   lastName: "mohan",
//   age: 2024 - 2009,
//   hobbies: ["drawing", "reading", "dancing"],
// };
// console.log(shami);
// expression using bracket notation

// const nameKey = "Name";
// console.log(shami["first" + nameKey]);
// console.log(shami["last" + nameKey]);
// //prompt
// const intrestedIn = prompt("what do you want to know about shamitha?");
// console.log(intrestedIn);
// console.log(shami[intrestedIn]);

//  adding new property or value

// shami.location = "mysore",
// shami["favFood"] = "pizza",
// shami.friends=['bob','sam'];

// console.log(shami);
// checking for operator precendece between dot & bracket
// console.log(`${shami.firstName} has ${shami.friends.length} friends and her best friend is ${shami.friends[0]}`);

// function inside object i.e method

// const shami = {
//   firstName: "shamitha",
//   lastName: "mohan",
//   birthYear:2009,
//   hobbies: ["drawing", "reading", "dancing"],

//   // function expression
//   calcAge:function(){
//     // storing so that can be called whenver need instad of logging many times that leads to violation of dry.
//     this.age=2024-this.birthYear
//     return this.age
//   },
// };

// console.log(shami.calcAge());
// console.log(shami.age);

// // bmi calculation
// const mark={
//   fullName:"Mark Miller",
//   mass:78,
//   height:1.69,
//   calcBMI:function(){
//   this.bmi= this.mass/(this.height*this.height)
//   return this.bmi;
//   }
// };

// const john={
//   fullName:"John Smith",
//   mass:92,
//   height:1.95,
//   calcBMI:function(){
//   this.bmi=this.mass/(this.height*this.height)
//    return this.bmi

//   },
// }
// console.log(mark.calcBMI())
// console.log(john.calcBMI())

// if(mark.bmi>john.bmi){
//    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// }else{
//    console.log(`${john.fullName}'s BMI ${(john.bmi)} is higher than ${mark.fullName}'s BMI ${mark.bmi} `)
// }

//    LOOPS!!!!
// FOR loop

// for (let i = 1; i <= 10; i++) {
//   console.log(`hey there ${i}!`);
// }

//arrays
// const shami = ["shamitha", "mohan", 2009, ["drawing", "reading", "dancing"]];

// for (let i = 0; (i = shami.length); i++) {
//   if (typeof shami[i] === "Number") break;
//   console.log(shami);
// }


////// tip calculating

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  /* Write your code below. Good luck! 🙂 */
  
   const bills=[
       22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
      ]
      
  const tips=[]
  const totals=[]
  
  for(let i=1;i<11;i++){
      totals.push(bills+tips)
  }
  console.log(totals)
