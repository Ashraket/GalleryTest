import { Component } from "react";
import Text from "./components/text";
import Image from "./components/image";
import Header from "./components/header";
import './main.css';

class App extends Component {

    // constructor(){
    //     super()
    //     this.state={
    //         name:"ahmed",
    //         source:'./coco/1.jpg'
    //     }
    // }
    // click =()=>{
    //     this.setState({source:'./coco/3.jpg'})
    // }
    render(){
        return(
            <div className="body">
            <Header></Header>
            <Text></Text>
            <hr></hr>
            <Image></Image>
            </div>


            // <div>
            // <input type="text" value={this.state.name} onChange={(e)=>{

            //     this.setState({name:e.target.value})
            // }}></input>
            // <img src={this.state.source}></img>
            // <input type="button" onClick={this.click} value="change"></input>
            // {this.state.name}</div>
            
        )
    }

}
export default App;