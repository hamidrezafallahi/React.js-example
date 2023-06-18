import React, { Component } from 'react';
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
class Comp6 extends Component {
    render() {
        const imgstyle={
            width:"200px",
            height:"100px",
            margin:"10px"
        }
        return (
            <>
                <img src={img1}style={imgstyle}  alt=""/>
                <img src={img2}style={imgstyle}  alt=""/>
                <img src={img3}style={imgstyle}  alt=""/>
            </>
        );
    }
}
export default Comp6;