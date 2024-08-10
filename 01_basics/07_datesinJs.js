//++++++++++++++++++++++++++++ Dates +++++++++++++++++++++++++++++++++++//

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

const array = ["a","b","c"];
const elements = [0,1,2,3,4,5];

// array.push.apply(array,elements);
// console.log(array)//output:- [ 'a', 'b', 'c', 0, 1, 2, 3, 4, 5]
  
// array.push(...elements);
// console.info(array)//output:- [ 'a', 'b', 'c', 0, 1, 2, 3, 4, 5]