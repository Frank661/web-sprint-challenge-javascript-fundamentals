// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */
console.log('closures: task 1')

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// nestedFunction is able to access the internal variable because they are both part of the myFunction function. Making internal variable a local variable that can be accessed only within the myFunction function.





/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
// let counter = 0;
function summation (number){
  let counter = 0;

 for(let i = 0; i < number ; i++){
   (counter = number =+ i)
 }
  
  return counter;
};

console.log(summation(4));
