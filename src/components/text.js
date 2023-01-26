import { Component } from "react";
import '../main.css';

class Text extends Component{

    constructor(){
        super()
        this.state={
            text:"new"
        }
    }
    click=()=>{
        this.setState({text:'deafult'})
    }

    render(){
        return(
            <div>
                <h2>Component 1</h2>
                <input className="text" type="text" value={this.state.text} onChange={(e)=>{
                    this.setState({text:e.target.value})
                }}></input>
                <input type="button" onClick={this.click} value="default"></input>
                {this.state.text}
            </div>
            
        )
    }
}

export default Text