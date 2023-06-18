import React, { Component } from 'react';

class Comp1 extends Component {
    render() { 
        const divstyle={
            background:"yellow",
            border:"1px solid gray",
            margin:"10px",
            padding:"5px",
            width:"500px",
            height:"150px"
        }
        //console.log(this.props)
        const {name,family,age,children}=this.props;
        return(
            <>
                <div style={divstyle}>
                {console.log(this)}
                {/* <div> */}
                    <h3>{name}</h3>
                    <h3>{family}</h3>
                    <h3>{age}</h3>
                    <p>{children}</p>
                </div>

            </>
        )
    }
}
 
export default Comp1;