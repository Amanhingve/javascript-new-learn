const name = "aman"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('aman-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
// 
// console.log(gameName.lastIndexOf('a'));
// console.log(gameName.slice(2, 5));
// console.log(gameName.substring(2, 5));

const newString = gameName.substring(0, 4) // do not use (-8, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   aman    "
console.log(newStringOne);
console.log(newStringOne.trim());  //trim use dom --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://aman.com/aman%20hingve"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-')); //split use dom --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


