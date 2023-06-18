import React, { Component } from 'react';





class Teststate2 extends Component {
    constructor(){
        super();
        this.state={
            flag:true,
        }

    }
    ChangeState=()=>{
        const {flag}=this.state;
        this.setState({flag:!flag})
    }



    render() { 
        const {title,children} = this.props;
        return(
            <>
                    <h1>{title}</h1>
                    {
                        this.state.flag?
                        (
                            <>
                                <div>{children}</div>
                                <button onClick={this.ChangeState}>hide</button>
                            </>

                        )
                        :
                        (
                            <button onClick={this.ChangeState}>show</button>
                            
                        )
                    }
            </>
                );
    }
}
 
export default Teststate2;