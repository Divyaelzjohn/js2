
/*for(let n=5;n>=1;n--){
  let stars="";
  for(let i=1;i<=n;i++){
    stars+="*"
  }
  console.log(stars)
}*/

/*let totalRows=5;
for(let row=1;row<=totalRows;row++){           
  let line="";     

  for(let s=1;s<=totalRows-row;s++){
    line+=" "
  }

  for(let col=1;col<=2*row-1;col++){
    line+="*"
  }
  console.log(line)
}
for(let row=totalRows-1;row>=1;row--){           
  let line="";     
 
  for(let s=1;s<=totalRows-row;s++){
    line+=" "
  }

  for(let col=1;col<=2*row-1;col++){
    line+="*"
  }
  console.log(line)
}*/

/*let totalRows = 5;

// Top half
for (let row = 1; row <= totalRows; row++) {
  let line = "";

  // spaces before stars
  for (let s = 1; s <= totalRows - row; s++) {
    line += " ";
  }

  // stars + hollow spaces
  for (let col = 1; col <= 2 * row - 1; col++) {
    if (col === 1 || col === 2 * row - 1) {
      line += "*";
    } else {
      line += " ";
    }
  }

  console.log(line);
}

// Bottom half
for (let row = totalRows - 1; row >= 1; row--) {
  let line = "";

  // spaces before stars
  for (let s = 1; s <= totalRows - row; s++) {
    line += " ";
  }

  // stars + hollow spaces
  for (let col = 1; col <= 2 * row - 1; col++) {
    if (col === 1 || col === 2 * row - 1) {
      line += "*";
    } else {
      line += " ";
    }
  }

  console.log(line);
}*/



/*// for...of
let colors=["Red","Blue","Green"];
for(let color of colors){console.log(color)}

// For ...in loop
let person={name:"Divya",age:20,country:"India"}
for(let key in person){console.log(key,":",person[key])}*/


// break and continue
// break-> break is used to exit a loop immediately, even if the loop condition is still true, It stops the execution of the loop completely.

/*
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Breaking at", i);
    break; // loop ends when i = 5
  }
  console.log(i);
}
*/
// What is contimue in javascript? ->Continue is used to skip the current iteration an dmove to the next loop iteration. It does not exit the loop completely , only skips that one cycle.
/*for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping", i);
    continue; // skip 3
  }
  console.log(i);
}*/

/* Usecases
1.Search and stop - When you find an item, no need to continue checking.
2.Exit infinte loops- Often used with while(true) loops
3.Skip unwanted values-Example :skip odd numbers , print only even
4.Filter input values- Example:skip empty values in an array.
*/

/*1.let numbers = [10, 25, 30, 42, 50];
let search = 30;
for (let num of numbers) {
  if (num === search) {
    console.log("Found:", num);
    break; // stop searching
  }
}*/

/*2. let count = 0;
while (true) {
  count++;
  if (count === 5) {
    break; // exit after 5
  }
}
console.log("Loop ended at", count);*/

/*3.for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue; // skip odd
  console.log("Even:", i);
}*/

/* 4. let inputs = ["apple", "", "banana", "", "grape"];
for (let item of inputs) {
  if (item === "") continue; // skip empty
  console.log("Valid:", item);
}*/


// MiniProject
/*let secret = 7;
for (let attempt = 1; attempt <= 5; attempt++) {
  let guess = parseInt(prompt("Enter a number (1-10):"));
  if (guess === secret) {
    alert("Correct! You win!");
    break; // stop the game
  } else {
    alert("Wrong, try again!");
  }

  if (attempt === 5) {
    alert("Game Over! The number was " + secret);
  }
}*/

// Skip invalid scores
/*let scores = [85, 90, -1, 76, 0, 95]; // -1 and 0 are invalid
for (let score of scores) {
  if (score <= 0) continue; // skip invalid
  console.log("Valid Score:", score);
}*/

// Find first Even Number(break)
let numbers=[11,13,17,20,25,30];
for(let num of numbers){
  if(num%2===0){
    console.log("First even: ",num);
    break;
  }
}

