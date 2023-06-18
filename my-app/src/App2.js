import React, { Component } from 'react';
import Comp4 from "./component/Comp4";
import Comp5 from "./component/Comp5";


class App2 extends Component{
render() {
    const divstyle={
        display:"flex",
        justifyContent:"space-around"
    }
    return (
         <div style={divstyle}>


         <Comp4/>
         <Comp5/>
         <Comp5/>
         </div>
    );
}

}
export default App2;