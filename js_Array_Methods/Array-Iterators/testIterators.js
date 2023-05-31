
let myCart= [ 'mangos', 'apple', 'jinja','lemon','carrots'];

//forEach..................................................

// the above iterator takes 3 parameters , param-1 is compulsory , param-2 and param-3 are optional.
// the variables name passed as parameters are dynamic varibles can be changed.
//uses anonymous  fuction

myCart.forEach(
  function(value, index, array){
    console.log(`${value}`)
   return console.log(`The value is ${value} at index ${index}`)
  }
)



//output

/* mangos
 The value is mangos at index 0
 apple
 The value is apple at index 1
 jinja
 The value is jinja at index 2
 lemon
 The value is lemon at index 3
 carrots
 The value is carrots at index 4........................*/

// map()
// act the same as forEach array , the difference is that it can create a copy of the original array , can manupilate the array and return different values.
//using string

function convertToUpperCase(value){
  return value.toUpperCase();
}

let myCapsWord = myCart.map(convertToUpperCase) //uses a named function
console.log(myCapsWord); // ['MANGOS', 'APPLE', 'JINJA', 'LEMON', 'CARROTS'] capitalized,changed from original state, a copy
console.log(myCart);  //  ['mangos', 'apple', 'jinja', 'lemon', 'carrots'] unchanged , in its original state

let myDiscount = [100 ,20  ,30 ,45, 390]

function square(value){
  return value * value ; 
}
 let discAmount = myDiscount.map(square); //uses a named fuction
 console.log(discAmount); // [10000, 400, 900, 2025, 152100 ;
 console.log(myDiscount) //[100, 20, 30, 45, 390] in its original state