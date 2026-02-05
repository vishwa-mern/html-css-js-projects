
import Course from "./Course"
function App() {
 const name="Vishwajeet"
 const friends=["vedant ","vaibhav ","aarushi ","satyarth ","pratik "]
 const fruits = (name) =>{
  alert(name)
 }
 
  return (
    <div>
      <h1>
        Hallo my name is {name}
        <br />
       
      </h1>
      <h3>
        My friends are:{friends.join(",")}
        {friends[1]}
       <ol>
        my friends are: 
         {
         friends.map((friend,index)=> {
          return <li key = {index}>{friend}</li>
         
        })
        } 
</ol>
      </h3>
      {Learn()}
       <Learn/>
        <button onClick={() => fruits("apple")}>Click me</button>
        <button onClick={()=>Click("button clicked")}>Click me</button>
    </div>
  )
}

function Learn(){
  return(
    <div>
      <Course/>
      <h1>
         <ul>
          
          <li>
              i am learning react js.
          </li>
         </ul>
      </h1>
    </div>
  )
}

export default App



  function Click(click){
    alert(click)
  }