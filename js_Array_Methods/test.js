
let myCart= [ 'mangos', 'apple', 'jinja','lemon','carrots'];
console.log(myCart.length) //5
console.log(myCart[myCart.length-1]) // last element in the array
console.log(myCart.length=3) //  to change the length of the array
console.log(myCart)  // the values get update , will only display 3 elements

//indexOf -returns index position (index in  array begins from 0)
console.log(myCart.indexOf('lemon'))  //-1  this element was removed 
console.log(myCart.indexOf('carrots'))  //-1  this element was removed 
console.log(myCart.indexOf('mangos'))  // 0
console.log(myCart.indexOf('apple')) // 1
console.log(myCart.push('lemon')) //4
console.log(myCart.indexOf('lemon')) //3
console.log(myCart) //[ 'mangos', 'apple', 'jinja','lemon']
console.log('\n')
myCart.length >= 1 ? console.log(`Cart has  ${myCart.length} items`): console.log('Cart is empty') // returns true on condition ,so cart length is logged
console.log('\n')

//includes - returns a boolean
console.log(myCart.includes('lemon'));
console.log('\n')
myCart.includes('lemons')?console.log( 'item already added in the cart'):console.log('item  added successfully');
