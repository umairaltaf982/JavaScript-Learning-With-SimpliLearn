//creating the array
let cars = ["Corolla", "Honda", "Nissan"];
document.getElementById("demo").innerHTML = cars;

//accessing any element of the array
let anyelem = cars[0];
document.getElementById("demo").innerHTML = anyelem;

//getting length of the array
let len = cars.length;
document.getElementById("demo").innerHTML = len;

//accessing last element of the array
let lastelem = cars[cars.length - 1];
document.getElementById("demo").innerHTML = lastelem;

//loop over an array
cars.forEach((item, index, array) => { console.log(item, index); });


//array methods

//converting array to string
document.getElementById("demo").innerHTML = cars.toString();

//pop() : removing the last element of the array
document.getElementById("demo").innerHTML = cars.pop();

//push()  : add the element to the end of the array
cars.push("Audi");
document.getElementById("demo").innerHTML = cars;

//shift() : remove the first element from an array
cars.shift();
document.getElementById("demo").innerHTML = cars;

//unshift() : add the element in the starting of the array
cars.unshift("Mercedes");
document.getElementById("demo").innerHTML = cars;

//concat() : create an array by merging an existing array
let bikes = ["Suzuki", "Harley Davidson", "Yamaha"];
let vehicles = cars.concat(bikes);
document.getElementById("demo").innerHTML = vehicles;

//sort() : sort an array to ascending order
document.getElementById("demo").innerHTML = vehicles.sort();

//reverse() : reverse the elements of the array
document.getElementById("demo").innerHTML = vehicles.reverse();

//map() : creates the new array and performs a function on each element of array
let arr1 = [1, 2, 3, 4];
let arr2 = arr1.map(multiply);
function multiply(value) {
    return value * 2;
}
document.getElementById("demo").innerHTML = arr2;

//filter() : takes each element from the array and apply the conditional statement against it
//that means if the condition returns true of the element than it will be displayed 
//in the new array otherwise not
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr4 = arr3.filter(isEven);
function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
}
document.getElementById("demo").innerHTML = arr4;

//reduce() : reduces thearray to the single value using a function. it doesn't effect the original array
let num1 = arr1.reduce(sum);
function sum(total, value) {
    return total + value;
}
document.getElementById("demo").innerHTML = num1;