// create a js object
// there are three ways to create an object in js

// 1- Use object literal to create and define javascript object  { name : value }
var student1 = {
    name1: "Umair",
    age: 21,
    dept: "CS",
};
document.getElementById("demo").innerHTML = student1.name1 + " is of age " + student1.age + " is in department " + student1.dept;


// 2- Use the keyword new to create and define a javascript object      var obj_name = new object()
var student2 = new Object();
student2.name2 = "Ammar";
student2.age = 19;
student2.dept = "SE";
document.getElementById("demo").innerHTML = student2.name2 + " is of age " + student2.age + " is in department " + student2.dept;


// 3- Use an object constructor to create and define a javascript Object
function stud(name, age, dept) {
    this.name = name;
    this.age = age;
    this.dept = dept;
}
var student3 = new stud("Ali", 20, "EE");
document.getElementById("demo").innerHTML = student3.name + " is of age " + student3.age + " is in department " + student3.dept;



//Javascript Object properties
//A JAvascript object is basically a collection of unordered properties
//Values associated with a Javascript Object are called its properties
//Properties can usually be added, updated, deleted, excluding read-only properties
//lets have an example
var student1 = {
    name1: "Umair",                          //Property
    age: 21,                                 //property
    dept: "CS",                              //property
};
//we can override any of the property
student1.name1 = "Ammar";                   //overriding property
document.getElementById("demo").innerHTML = student1.name1 + " is of age " + student1.age + " is in department " + student1.dept;



//Javascript Methods
// def: A javascript method is an action that can be performed on the objects
// A javascript method is a property of an object that is a function
// lets have an example
let data = {
    name: "Farhan",
    age: 45,
}
function sayHi() {
    alert("Hello " + data.name);
}
data.message = sayHi;             //adding a new property to the object named data
document.getElementById("demo").innerHTML = "Hi! " + data.name + " of the age " + data.age;
document.getElementById("click").onclick = data.message;



//Javascript object Accessors
// def: An accessor is a function that is called when you try to access a property

//getter is used to get the value of the properties of the object 
//Example of getter
var car = {
    name: "Mustang",
    model: "1998",
    feul_type: "Diesel",
    get feul() {
        return this.feul_type;
    },
}
document.getElementById("demo").innerHTML = car.name + " is a " + car.model + " and it is a " + car.feul + " car";


//setter is used to set the value of the properties of the object
//Example of setter
var cat = {
    name: "Tom",
    cat_age: 5,
    set age(age) {
        this.cat_age = age;
    }
}
cat.age = 6;
document.getElementById("demo").innerHTML = cat.name + " is " + cat.cat_age + " years";
