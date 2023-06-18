import React, { Component } from 'react';

class Comp4 extends Component {
    render() {
        const item = "mehdi";
        const age = 43;
        const object={job:"teacher"}
        var x = 20;
        return (
            <>
                <ul>
                    <li>{item}_{age}</li>
                    <li>{item}_{age}</li>
                    <li>{item}_{age}</li>
                    <li>{1000*x} _ {5*5}</li>
                    <li>{item}_{age} : {object.job}</li>
                </ul>
            </>
        );
    }
}
export default Comp4;