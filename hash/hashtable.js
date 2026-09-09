

function hash(key){
    
let hash= new Array(10);
let sum = 0
let strs=0





for (let i=0; i<key.length; i++){
    for (let j=0; j<key[i].length; j++){
        let char = key[i].charCodeAt(j);
        sum += char;
       
    }
     strs= sum % 10;
       hash[strs] = key[i];
        sum = 0
    

}
return hash
}

my_array = ['Pete', 'Jones', 'Lisa', 'Bob', 'Siri']
console.log(hash(my_array))



