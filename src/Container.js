import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import './App.css';

class Container extends Component {
    render() {
        return(
            <div className= "body">
             <Header />
             <Form />
             </div>
        );
    }
}

export default Container;