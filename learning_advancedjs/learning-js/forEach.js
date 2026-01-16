let arr=[1,2,3,4,5];
arr[10]=11;
//console.log(Object.keys(arr));
// let str=arr.toString();
// console.log(str);
// console.log(typeof str);
// console.log(str.padStart(1,'011'));
 arr.forEach(function(value,index){
    console.log(`index:${index}` ,`value:${value}`);
});
console.log(arr.reverse());
// console.log(arr);console.log(arr.length);
let reversedArr = arr.toReversed();
console.log(reversedArr);