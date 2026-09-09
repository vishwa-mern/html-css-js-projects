

function hash(key, callback){
    
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

callback(hash);



return hash;
}

function contains(value)
{
    let sum=0
    for (let i=0; i<value.length; i++){
        let char = value.charCodeAt(i);
        sum += char;
    }
    sum= sum % 10;
    return function(hash){
        if (hash[sum] === value){
     console.log(true);
    } else {
        console.log(false);
    }
  
}
}

my_array = ['Pete', 'Jones', 'Lisa', 'Bob', 'Siri']
console.log(hash(my_array,contains('Pets')))



