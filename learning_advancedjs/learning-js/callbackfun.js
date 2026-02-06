
// Callback function example in JavaScript

// A function that takes another function as a parameter    
// function callbackFunction(callback) {
//     callback();
// }

// callbackFunction(function() {
//     console.log("This is a callback function!");
// });
// // Another example with parameters
// function fetchData(callback) {
//     console.log("fetching data...");
//     setTimeout(
//         function (){
//             const data = {name: "John", age: 30};
//             console.log(data);
//             callback(data);
//         },2000
//     )
// }
// function data(data) {
//     setTimeout(function(){
//     console.log("Data received");
//     },500); 
// }
// fetchData(data);
// using closure with callback
function outerFunction(message){
    function innerFunction(){
        console.log("Inner Function: " + message);
    }
    return innerFunction;
}
const myFunction = outerFunction("Hello from closure!");
myFunction(); // Outputs: Inner Function: Hello from closure!





