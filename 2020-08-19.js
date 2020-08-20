
// JAVASCRIPT NOTES
// WD-PT-August2020
// 2020 August 19 -- Ocean

//   PLAN FOR TONIGHT
//    -1. speaker??
//     0. git
//     1. literals
//     2. statements vs. expressions
//     3. scope
//     4. hoisting (if time allows)
//     ∞. challenges / work time

// ==========================================================================
// 0. git

/*

This is a change!




























*/



// ==========================================================================
// 1. literals

let num = 3;

let str = 'moon';

let bool = true;

let obj = {
  a: 3,
  b: 8
};

let arr = [4, 'b', true];


function addThings (a, b) {
  console.log(a + b);
}

addThings("cat", "fish");





























// ==========================================================================
// 2. statements vs. expressions


let x = 3;

if (x > 2) {
  console.log("yes");
  if (x > 3) {
    console.log("double yes");
  }
}




let y = 5 + addThings(2, true ? 4 : 3);

console.log(4 < 5 ? console.log(true) : console.log(false));


function addThings (a, b) {
  return (a + b);
}

if (addThings(4, 8)) {
  console.log("oh dear")
}


















// ==========================================================================
// 3. scope


let x = 3;
let y = 10;

if (true) {
  let y = 4;
}

const dog = 'chihuahua';

function printDog (dog) {
  return `${dog} is a good dog`;
}

const dogArray = ['whippet', 'st bernard', 'goldendoodle', 'skye terrier', 'chinese crested'];
const dogStatements = [];

for (let dog of dogArray) {
  dogStatements.push(dog.length > 9 ? 'not a good dog' : printDog(dog));
}


console.log(false ? 3 : (true ? 2 : 0));




console.log(dogStatements);









printDog('st bernard');

console.log(y);










// ==========================================================================
// 4. hoisting


function multiplyNumbers (a, b) {
  let tally = 0;
  for (let i = 0; i < a; i++) {
    tally = addNumbers(tally, b);
  }
  return tally;
}


console.log(multiplyNumbers(4, 5));


function addNumbers (a, b) {
  return a + b;
}
















