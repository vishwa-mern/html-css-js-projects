let name =["John", "Smith", "Doe", "Jane", "dash", "vishwajeet", "like"];
let [firstName,, lastName, ...rest] = name;
console.log(firstName); // Output: John
console.log(lastName);// Output: Doe
//spread defination -> The spread operator is a syntax in JavaScript that allows an iterable (like an array or string) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected. It is denoted by three dots (...). 
console.log(rest); // Output: ["Doe", "Jane", "dash", "vishwajeet", "like"]

const person = {
    name:"john",
    age:30,
    city:"New York",
    mobile_no:1234567890
}
let {name:personName, age, ...restInfo} = person;
console.log(personName); // Output: john
console.log(age); // Output: 30
console.log(restInfo); // Output: { city: "New York", mobile_no: 1234567890 }


