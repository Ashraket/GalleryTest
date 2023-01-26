import ReactDOM  from "react-dom";
import './main.css';
import './App.js';

import App from "./App.js";

/*let name="hi"

const styles={
    header:{
        background:"red",
        color:"white",
        padding:"5px",
        borderRadius:"5px"
    },
    text:{
        fontWeight:"Bold"
    }
 }
const el = (<div>
    <h1 style={styles.header}> Hello world !{"jsx evaluates string"}</h1>
    <p style={styles.text}>test</p>
    <input type="text" onChange={(e)=>{
        name=e.target.value
        
        ReactDOM.render(el,document.querySelector("#root"))
        

    }}></input>
    
</div>)
ReactDOM.render(el,document.querySelector("#root"))*/

const Element=()=>{
return(
    <h1>hello world</h1>
)

}

ReactDOM.render(<App/>,document.querySelector("#root"))