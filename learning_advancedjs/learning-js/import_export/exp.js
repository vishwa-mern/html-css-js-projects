function add(a,b){
    let add=a+b;
    console.log(add);
}
function sub(a,b){
    let sub=a-b;
    return sub
}
// module.exports = {add,sub};
export default{add,sub};