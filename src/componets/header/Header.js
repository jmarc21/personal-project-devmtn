import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component{
    render(){
        return(
            <div className='header'>
                <button className='home-button'>HOME</button>
                <h1 className='name'>G.0.A.T.</h1>
                <button className='login-button'>LOGIN</button>
            </div>
        )
    }
}