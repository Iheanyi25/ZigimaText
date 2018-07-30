import React, { Component } from 'react';
import './App.css';

class Form extends Component {
    render() {
        return(
            <div className= "form-box">
                <form className= "form">
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                        <label for="lname">Phone</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your phone number.." />

                       <label for="lname">Email</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your Email.." /> 

                        <label for="lname">Password</label>
                        <input type="text" id="lname" name="lastname" placeholder="Password.." />
                        <button> Submit</button>
                </form>
           </div>
        );
    }
}

export default Form;