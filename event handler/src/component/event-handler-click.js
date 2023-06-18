import React, { Component } from 'react';
import '../styles/main.scss'


class Eventhandler1 extends Component {
    constructor(){
        super();
        this.state = {
            name:"hamidreza"
        }
        this.clickhandler2=this.clickhandler2.bind(this);
    }
    clickhandler1(){
        console.log("clickhandler1")
    }
    clickhandler2(){
        console.log("clickhandler2");
        console.log(this.state.name);
    }
    clickhandler3=()=>{
        console.log("clickhandler3");
        console.log(this.state.name);

    }
    clickhandler4=(event)=>{
        console.log("clickhandler4");
        console.log(this.state.name);
        console.log(event.target);

    }
    clickhandler5=(event,x,y)=>{
        console.log("clickhandler5");
        console.log(this.state.name);
        console.log(event.target);
        console.log(x+y)
    }

    render() { 
        return <div>
            <h1>hello event handler</h1>
            <div className='buttons'>
            <button onClick={this.clickhandler1}>class</button>
             <button onClick={this.clickhandler2}>function-bind</button>
            <button onClick={this.clickhandler3}>arrow function</button>
            <button onClick={this.clickhandler4}>arrow - event</button>
            <button onClick={(event)=>this.clickhandler5(event,100,200)}>arrow - event - argument</button>
            </div>
        </div>;
    }
}
 
export default Eventhandler1;
//////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'



// function funchandler(){
//     alert("click handler functional");
// }
// function Eventhandler1 () {
//     return ( 
//         <>
//         <button onClick={funchandler}>function handler</button>
//         </>
//      );
// }
 
// export default Eventhandler1;