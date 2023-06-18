import React, { Component } from 'react';

class Comp5 extends Component {
    render() {
        const item = "mehdi";
        const age = 43;
        return (
            <>
                <ul style={{
                    background:"yellow",
                    fontSize:"1.8rem",
                    width:"150px"
                }}>
                    <li>{item}_{age}</li>
                    <li>{item}_{age}</li>
                    <li>{item}_{age}</li>

                </ul>
            </>
        );
    }
}
export default Comp5;