import { Component } from "react";
import '../main.css';

class Image extends Component{

    constructor(){
        super()
        this.state={
            index:0,
            timer:'',
            source:'./coco/1.jpg',
            picList:['./coco/1.jpg','./coco/2.jpeg','./coco/3.jpg','./coco/4.jpg','./coco/Dante.png']
        }
    }

    Next= () => {
        if (this.state.index + 1 === this.state.picList.length) {
        this.setState({
        index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
                })
        }
        console.log("e")
    }
      
    Slide=()=>{
        
        if(this.state.index<this.state.picList.length-1){
            this.setState({
                index: this.state.index + 1
                })
        }else {
            this.setState({
                index:0
                })
        }
        this.state.timer = setTimeout(this.Slide,2000)
       
    }
    Prev=()=>{
        if (this.state.index - 1 === -1 ){
            this.setState({
              index: this.state.picList.length - 1
            })
          } else {
            this.setState({
              index: this.state.index - 1
            })
          }
    }
    Stop=()=>{
        clearInterval( this.state.timer )
        this.state.timer=null
    }
    render(){
        return(
            <div>
            <h2>Component 2</h2>
            <img alt="gallery" src={this.state.picList[this.state.index]}></img>
            <br></br>
            <input type="button" value="Next" onClick={this.Next}></input>
            <input type="button" value="Prev"onClick={this.Prev}></input>
            <input type="button" value="Slider"onClick={this.Slide}></input>
            <input type="button" value="Stop"onClick={this.Stop}></input>
            </div>
            
        )
    }
}
export default Image