```js
setTimeout(document.write(onload), 30000);
let myCart = ["mangos", "apple", "jinja", "lemon", "carrots"];
console.log(myCart.length); //5
console.log(myCart[myCart.length - 1]); // last element in the array
console.log((myCart.length = 3)); //  to change the length of the array
console.log(myCart); // the values get update , will only display 3 elements
/*...........................................*/

//indexOf -returns index position (index in  array begins from 0) ,this function is case sensetive
console.log(myCart.indexOf("lemon")); //-1  this element was removed
console.log(myCart.indexOf("carrots")); //-1  this element was removed
console.log(myCart.indexOf("mangos")); // 0
console.log(myCart.indexOf("apple")); // 1
console.log(myCart.push("lemon")); //4
console.log(myCart.indexOf("lemon")); //3
console.log(myCart); //[ 'mangos', 'apple', 'jinja','lemon']
console.log("\n");
myCart.length >= 1
  ? console.log(`Cart has  ${myCart.length} items`)
  : console.log("Cart is empty"); // returns true on condition ,so cart length is logged
console.log("\n");
/*...........................................*/

//includes - returns a boolean
console.log(myCart.includes("lemon"));
console.log("\n");
myCart.includes("lemons")
  ? console.log("item already added in the cart")
  : console.log("item  added successfully");
/*...........................................*/

//pop - used to remove last element from an array
let userDetails = ["Mrs", "Joan", "Katerina", 23];
console.log(userDetails); //['Mrs', 'Joan', 'Katerina', 23]
console.log(userDetails.pop()); //23
console.log(userDetails); // [ 'Mrs','Joan','Katerina'] , 23 , was deleted by pop method
console.log(userDetails.toString() + " Signed up Successfuly "); //Mrs Joan,Katerina
/*...........................................*/

// shift -used to remove first element in an array
console.log(userDetails.shift()); //Mrs   -Logs the item that has been removed
console.log(userDetails); //['Joan', 'Katerina']
console.log(userDetails.toString()); //Joan,Katerina
/*...........................................*/

//push - used to add element at the last index
userDetails.push("balance", new Date());
console.log(userDetails); //['Joan', 'Katerina', 'balance', Tue May 30 2023 14:29:50 GMT+0300 (East Africa Time)], you can push an object or function in an array.

//reverse -produce the array elements in a reverse order
const [...gender] = userDetails;
console.log(gender.reverse()); //[Tue May 30 2023 15:00:01 GMT+0300 (East Africa Time), 'balance', 'Katerina', 'Joan']

//unshift -add an element at the first index

userDetails.unshift("Account active"); //5  when logged , displays the updated array elements after updating it.

console.log(userDetails); //['Account active', 'Joan', 'Katerina', 'balance', Tue May 30 2023 15:05:28 GMT+0300 (East Africa Time)]

/*...........................................*/
//concat
userAccounts = userDetails.concat(myCart);
console.log(userAccounts); // ['Account active', 'Joan', 'Katerina', 'balance', Tue May 30 2023 15:11:09 GMT+0300 (East Africa Time), 'mangos', 'apple', 'jinja', 'lemon'] , Display that both array are combined in this variable

userOrigin = userDetails.concat(["Kenya , Female"]);
console.log(userOrigin); //['Account active', 'Joan', 'Katerina', 'balance', Tue May 30 2023 15:14:19 GMT+0300 (East Africa Time), 'Kenya , Female'], added elements in the existing array , without pushing or refferencing to another array.

//joins - takes an array and returns its as a string, can take an argument , argument appears between the strings
let userAmount = [2000, 54000, 800, 500];
console.log(userAmount);
let userTotalAmount = userAmount;
console.log(userTotalAmount.join("")); //string 200054000800500 to concert to number use parseInt() but will convert the first element only

//splits - act opposite to join , takes a string andturns it to an array.
let usrAmountStr = "2000, 54000, 800, 500";
let usrTotalAmountStr = usrAmountStr.split();
console.log(usrTotalAmountStr); // ['2000, 54000, 800, 500'] an array now
/*...........................................*/

//slice -this is a non destructive method ,doesnt mutate array unlike splice.  we are able to extract data with certain index range using this method'

let userLoggedIn = ["June", "Mike", "Juliet", "Ann", "Dan"];
let latestLogged = userLoggedIn.slice(3, 5);
console.log(latestLogged); //['Ann', 'Dan']
console.log(userLoggedIn); //['June', 'Mike', 'Juliet', 'Ann', 'Dan']
console.log(userLoggedIn.slice(3, 4)); //['Ann']
console.log(userLoggedIn.slice(userLoggedIn.length - 1, userLoggedIn.length)); //['Dan']

//splice - this is a destructive method ,changes the structure of the array , removes elements in array and replaces or not with new ones , uses index positioning like slice.

let userLoggedOut = ["Milka", "John", "Angeline", "Mark", "Vivian"];
console.log(userLoggedOut); // (5) ['Milka', 'John', 'Angeline', 'Mark', 'Vivian']
userLoggedOut.splice(3, 1, "antony"); // ['Milka', 'John', 'Angeline', 'antony', 'Vivian'] ,first arg .3 represent index position, 1 represent element to be affectedby the change.
console.log(userLoggedOut);
userLoggedOut.splice(0, 0, "Jane");
console.log(userLoggedOut); //(6) ['Jane', 'Milka', 'John', 'Angeline', 'antony', 'Vivian']
userLoggedOut.splice(1, 1);
console.log(userLoggedOut); //['Jane', 'John', 'Angeline', 'antony', 'Vivian'], when you pass the index and element to be affected and dont pass any value , the range of those tobe affected is deleted from the index position
/*...........................................*/

// sort -used to arrange the array elements alphabeticaly
userLoggedOut.sort();
console.log(userLoggedOut.sort()); //['Angeline', 'Jane', 'John', 'Vivian', 'antony']

console.log(userLoggedOut.concat(["angeline", "jane", "Angel"]).sort()); // while sorting upcase is sorted and given high precidence then lowercase is sorted later

//test
const fruits = ["apple ", "orange ", "banana"];
console.log(fruits);
fruits.unshift("cherry", "pineapple");
console.log(fruits);
fruits.push("plum", "grapes");
console.log(fruits); // ['cherry', 'pineapple', 'apple ', 'orange ', 'banana', 'plum', 'grapes']
fruits.splice(3, 1, "lemon");
console.log(fruits); //['cherry', 'pineapple', 'apple ', 'lemon', 'banana', 'plum', 'grapes']
```
