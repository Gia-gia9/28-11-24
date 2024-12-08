const numbers = [3,4,5,7,8,10,15]

const squared = numbers.map(num => num * num)
console.log(squared);

const  evennumbers = numbers.filter(even => even % 2 === 0);
console.log(evennumbers);

const sum = numbers.reduce((acc, val) => acc + val, 0);
console.log(sum);


let numb = 14

if (numb > 10 && numb % 2 === 0) {
    console.log("true");
}else {
    console.log("falce");
}

