let arr=[1,2,3,4,5];
let sum=0;
for(let i=0;i<arr.length;i++){  
    console.log(arr[sum+1]);
}
// destructure
let [a,b,c,d,e]=arr;
console.log(a,b,c,d,e);
let oldData = {
  id: 101,
  name: "shivam",
  age: 18
};

let newData = {
  name: "vishwajeet"
};

let updated = {
  ...oldData,
  ...newData
};
console.log(updated);