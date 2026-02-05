
import Course from "./Course"
function App() {
 const name="Vishwajeet"
  return (
    <div>
      <h1>
        Hallo my name is {name}
        <br />
       
      </h1>
       <Learn/>
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
