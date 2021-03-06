/*
  IMPORTANT NOTE: use var for declaring variables
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.

  This exercise is to get you comfortable with interacting with promises in JavaScript
*/

/////////// DO NOT EDIT BELOW!!! ///////////
///////////////////////////////////////////

function promisedNames() {
  return new Promise((resolve, reject) => {
    resolve(['Aodhan', 'Greg', 'Jake']);
  });
}
/////////////////////////////////////////
/////////// DO NOT EDIT ABOVE!!! ////////

////////// PROBLEM 1 //////////

/*
 * Write a function called "first" that returns a [promise] by calling the "promisedNames" function and
 * only returns the first name from the names array.
 */

// Code Here
function first() {
  return promisedNames().then(res => res[0])
}

////////// PROBLEM 2 //////////

/*
 * Write a function called "last" that returns a promise by calling the "promisedNames" function and
 * only returns the last name from the names array.
 */

//Code Here
function last() {
  return promisedNames().then(res => res[res.length - 1])
}

////////// PROBLEM 3 //////////

/*
 * Create a function called "toLarge" that returns a promise that resolves the passed number when it is less than
 * or equal to 10 and rejects the number if it is greater than 10.
*/

//Code Here
function toLarge(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(num)
    } else {
      reject(num)
    }
  })
}

////////// PROBLEM 4 //////////

///////////// DO NOT EDIT ////////////////////////////
function promisesErrors() {
  return new Promise(function() {
    throw new Error('This is the error I promised')
  })
}
/////////////////////////////////////////////////////

/*
 * Write a function called "errorCatcher" that calls the promisesErrors" function above, catches the error
 * returned and then resolves the error message. # 这个resolves 就是 return the error the message
 *
 * hint: error objects have a message property
 * > { message: 'This is the error I promised' }
*/

// Code Here
function errorCatcher() {
  return promisesErrors().then().catch(err => err.message)
}

////////// PROBLEM 5 //////////

/*
 * Write a function called "waitFor10" that returns a Promise, waits 10 seconds, then resolves with
 * the boolean value "true".
 *
 * hint: the setTimeout() function can be used to run a function after a delay.
*/

//Code Here
function waitFor10() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(true)
    }, 10000)
  })
}
////////// PROBLEM 6 //////////

/*
 * Below is a promise named "promise6", this promise always resolves the number 10. Write the code that
 * would allow you to access the resolved value of "promise6" and set the "modifiedResolve" variable to
 * 2 times the resolved value of "promise6".
*/

///////// DO NOT EDIT ////////////
var promise6 = Promise.resolve(10);
var modifiedResolve;
/////////////////////////////////

//Code Here

modifiedResolve = promise6.then(i => {
  modifiedResolve = i * 2
})

