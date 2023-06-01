
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

// function calcTotalAmount(total,value,index,array){
//   return total+value;
// }
let totalPrice =priceOrder.reduce(
  function(total,value,index,array){
    return total+value;
  }
// both named and anonymous function will produce same result
)
console.log(totalPrice); //1146


//some  ,retuns a boolean value after checking certain condition
 let execeedOrderLimit = priceOrder.some(
  function(value){
    return value > 500
  }
 )
console.log(execeedOrderLimit)// true   . returned because 562 is greater than 500

//every , works the same as some but all values must meet the same condition

let lowOrderlimit = priceOrder.every(
  function(value){
    return value >10
  }
)
console.log(lowOrderlimit) //fase .returned false because not all values are greater than 10 ,3 is less than 10

// find method 
// this method is used to find an element in ana array and retuns it

let discountedUsers =['Moraa','Clinton','Annet','Zack'];

let userInterviewed = discountedUsers.find(
  function(value){
    return value === 'Annet'

  }
);
console.log(userInterviewed) //Annet , is founf inside the array , then its is returned. If a value is not found it rteturns undefined

let userNotInterviewed =discountedUsers.findIndex(
  function(value){
    return value ==='Zack'
  }
)
console.log(userNotInterviewed) //3 if the value didnt exist ,it would return -1


//test 
const fruits = ['apple','orange','banana'];
 
let myFruitsAlert = fruits.forEach(
  function(value ,index ,arrray){
    // return alert(index +' - '+ value)
  }
)
console.log(myFruitsAlert);


let upperCaseFruits = fruits.map(
  function (value ,index,array){
    return value.toUpperCase(value)
  }
)
console.log(upperCaseFruits);

let checkStringLength = fruits.every(
  function (value,index,array){
    return value.length > 4;
  }
);
 console.log(checkStringLength)
