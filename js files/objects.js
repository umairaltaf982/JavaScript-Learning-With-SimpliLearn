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