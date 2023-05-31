
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
 The value is carrots at index 4*/

// map()............................................................
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

 // filter.........................................................
//  is used to filter an array ,it applies conditional statement on each element and hence return results based on boolean
let listNumbers = [35,3,45,56,23,562,78,90,34,46,78,96];
let evenNum =  listNumbers.filter(
  function(value,index,array){
    // return value %  2 === 0;                //  ouput . [56, 562, 78, 90, 34, 46, 78, 96]   use this is short
    return value ? value %2 ===0: value%2!==0; //  ouput . [56, 562, 78, 90, 34, 46, 78, 96]
  }
) // uses anonymous function like forEach, extract values based on condition
console.log(evenNum)

//..............................................................
//reduce method  - used to compute and sum up the array elents for instance...........
// can actually take 4 param , mostly first two are used , the first param is used to stores values
// uses a named function 
let priceOrder = [35,3,45,56,23,562,78,90,34,46,78,96];

function calcTotalAmount(total,value,index,array){
  return total+value;
}
let totalPrice =priceOrder.reduce(calcTotalAmount)
console.log(totalPrice);
