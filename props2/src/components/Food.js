import React, { Component } from 'react';
import '../styles/food.css'

class Food extends Component{
    render(){
        const {img,title,children}=this.props;
        return(
            <>
            <div className='food-box'>
                <img src={img}alt={title} className='img200'/>
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
            </>
        )
    }
}
export default Food;