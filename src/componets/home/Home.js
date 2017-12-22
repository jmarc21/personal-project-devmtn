import React, {Component} from 'react';
import './Home.css';
import axios from 'axios';

export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            lat: '',
            lon: ''
        }
    }
    render(){
        return(
            <div>
                <input type="text" placeholder='Search Vacation Spots'/>
                <button>Search</button>

            </div>
        )
    }
}