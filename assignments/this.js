/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when none of the other rules apply it defaults to the window object
* 2. When the "this" keyword is used to give the attribute to the left of it meaning by pointing you to where that attribute is in your code.
* 3. Its when you use the .call, .apply or .bind mwthods/functions to bind it to specific attributes (a method is a function of an object)
* 4. When the new keyword binds the object to the values of the 'this' keyword
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// console.log(this) in the browser console without any functions or attributes using the "this" keyword and you should get back the window object
console.log(this)

// Principle 2

// code example for Implicit Binding
let shooter = {
    name: "Ace",
    age: "classified",
    shot: "Bang!",
    fire: function() {
        console.log(this.shot)
    }
}

// Principle 3

// code example for Explicit Binding
function tackle() {
    console.log(`${this.name} made the tackle!`)
}

let player = {
    name: "Gary",
    number: 1
}

hit = tackle.bind(player);
hit();

// Principle 4

// code example for New Binding
// Refer to line 108 in prototype.js to see it 