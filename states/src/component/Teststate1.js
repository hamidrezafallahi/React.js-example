import React, { Component } from 'react';





class Teststate1 extends Component {
    constructor(){
        super();
        this.state={
            name:'mehdi',
            family:'abbasi',
            age:23
        }
    }
    changepersoninfo=()=>{
        this.setState(
            {
                name:'ali',
                family:'rezaee',
                age:44
            }
        )
    }



    render() { 
        const {name,family,age}=this.state;
        return( <>
        <ul>
            <li>{name}</li>
            <li>{family}</li>
            <li>{age}</li>
        </ul>
        <button onClick={this.changepersoninfo}>change</button>
            {/* {console.log(this)} */}
            <h1>{name} - {family} - {age}</h1>
        </>);
    }
}
 
export default Teststate1;