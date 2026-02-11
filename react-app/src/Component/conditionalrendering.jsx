function ConditionalRendering() {
let name=""
return(
    <div>
    <h1>Conditional Rendering</h1>
    {name.length>0?<h3>Hello {name}</h3>:<h3>not name</h3>}
    </div>
)
}
export default ConditionalRendering;