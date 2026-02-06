let intervalId = setInterval((()=>{
    console.log("Interval executed");
}), 1000);

setTimeout((()=>{ 
    clearInterval(intervalId);
}), 5000);
console.log("Interval started");