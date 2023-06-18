import React, { Component } from 'react';
import Food from './Food';
import '../styles/foods.css';
import f1 from '../images/1.png';
import f2 from '../images/2.png';
import f3 from '../images/3.png';
import f4 from '../images/4.png';
class Foods extends Component{
    render(){
        return(
            <>
            <div className='foods-box'>
                <Food img = {f1} title='title1'>loremsrfhgdfhbdfbdfbadfbdb</Food>
                <Food img = {f2} title='title2'>adfbdfbdfbfbdfbadfb</Food>
                <Food img = {f3} title='title3'>tyjrtyjtyjtyjtyj</Food>
                <Food img = {f4} title='title4'>bvvbnvbmvbmvbmhm</Food>
                <Food img = {f3} title='title3'>tyjrtyjtyjtyjtyj</Food>
            </div>
            </>
        )
    }
}
export default Foods;