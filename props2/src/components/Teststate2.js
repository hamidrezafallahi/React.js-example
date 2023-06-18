import React, { Component } from 'react'
class Teststate2 extends Component{
    constructor(){
        super();
        this.state={
            flag:true,

        }

    }
    changestate=()=>{
        const {flag}=this.state;
        this.setState({
            flag:!flag
        })
    }
    render(){
        const {title}=this.props;
        const {children}=this.props;
        const {flag}=this.state;
        return(
            <>
                <h1>{title}</h1>
                {
                    flag?
                    (
                        <>
                            <div>{children}</div>
                            <button onClick={this.changestate}>Hide</button>
                        </>
                    )
                    :
                    (<button onClick={this.changestate}>show</button>)
                }

            </>
        )
    }
}
export default Teststate2;