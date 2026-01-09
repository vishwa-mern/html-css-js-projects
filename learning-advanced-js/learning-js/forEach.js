let arr=[1,2,3,4,5];
arr[10]=11;
console.log(Object.keys(arr));
let str=arr.toString();
console.log(str);
console.log(typeof str);
console.log(str.padStart(1,'011'));


