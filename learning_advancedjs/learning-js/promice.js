// const promise_demo = new Promise((resolve,reject)=>{
//     let a=10;
//     let b=20;
//     if(a>b){
//         resolve("a is greater than b");
//     }
//     else{
//         reject("a is not greater than b");
//     }
// });
// promise_demo.then((message)=>{
//     console.log("Promise resolved:", message);
// }).catch((error)=>{
//     console.log("Promise rejected:", error);
//});

// async function test() {
//   return "Hello";
// }
// test().then((message) => {
//   console.log("Promise resolved:", message);
// }).catch((error) => {
//   console.log("Promise rejected:", error);
//}); 

function getData(){
  return Promise.resolve("Data mil gaya");
}
async function showData() {
  const result = await getData();
  console.log(result);
}
showData();

