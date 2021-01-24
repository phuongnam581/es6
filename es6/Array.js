//Array function
const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 }
];

//filter -> elements of array
const filterdItems = items.filter(item => item.price < 1000);
console.log(filterdItems);

//map -> value be returned by callback function
const doublePrices = items.map(item => item.price * 2);
console.log(doublePrices);

//find -> elements of array
const findItem = items.find(item => item.name == "Computer");
console.log(findItem);

//foreach -> value be returned by callback function
items.forEach(item => console.log(item.name));

//some -> boolean
const resultSomeFunction = items.some(item => item.price < 0);
console.log(resultSomeFunction);

//every -> boolean
const resultEveryFunction = items.every(item => item.price < 100);
console.log(resultEveryFunction);

// reduce -> value
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total);

//includes -> boolean
const itemsTwo = [1, 2, 3, 4, 5];
const value = itemsTwo.includes(0);
console.log(value);
