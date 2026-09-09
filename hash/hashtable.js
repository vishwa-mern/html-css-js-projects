

function hash(key){
    
let hash= new Array(10);
for (let i = 0; i < hash.length; i++) {
    hash[i] =[];
}
let sum = 0
let strs=0

for (let i=0; i<key.length; i++){
    for (let j=0; j<key[i].length; j++){
        let char = key[i].charCodeAt(j);
        sum += char;
       
    }
     strs= sum % 10;
       hash[strs].push(key[i]);
        sum = 0
    

}





return hash;
}

// function contains(value)
// {
//     let sum=0
//     for (let i=0; i<value.length; i++){
//         let char = value.charCodeAt(i);
//         sum += char;
//     }
//     sum= sum % 10;
//     return function(hash){
//         if (hash[sum] === value){
//      console.log("the value is in the hash table",true);
//     } else {
//         console.log("the value is not in the hash table:",false);
//     }
  
// }
// }


    


my_array = ['Pete', 'Jones', 'Lisa', 'Bob', 'Siri','Stuart']
console.log(hash(my_array))



