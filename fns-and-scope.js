//////////////////PROBLEM 1////////////////////

var name = 'Tyler';

//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

  function isTyler(name) {
  if (name === "Tyler") {
    return true;
  }
  else {
    return false;
  }
}
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName(name) {
var name = prompt("Pleae enter your name")
return name;
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

function welcome() {
  alert("Welcome, " + getName())
}

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
/*
----arguments are used when invoking a function. They could be though of as inputs for a fuction being

---Paramenters are assigned when defining functions. They outline what arguments "inputs" will be used by the function when it's invoked




*/

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  /*
JavaScript makes use of valuses called Booleans, which means values can be set to true or false. However, every value has a
inherent Booleans value, typically known as truthy or falsy.
The following values are JavaScripts falsy values:
false, 0, "", null, undefined, and Nan.

All other values are truthy. Including "0" (zero in quotes), "false" (False in ""), empty functions, empty arrays, and empty objects.


*/
//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name
  //Code Here

function myName(){
return "Andy"
}


//Now save the function definition of myName into a new variable called newMyName

  //Code Here



//Now alert the result of invoking newMyName
function newMyName() {
var newMyName = myName()
alert(newMyName);
}


//////////////////PROBLEM 7////////////////////


//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

function outerFn() {
  return  myName = function() {
  return "Andy"; }
}


//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

var innerFn = outerFn()


//Now invoke innerFn.

innerFn()
