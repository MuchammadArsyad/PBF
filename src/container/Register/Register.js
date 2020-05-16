import React, { Component } from 'react';
import './Register.scss';
import firebase from '../firebase';
class Register extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        console.log(e.target.id)
        // this.setState({
        //     [e.target.id]: e.target.value
        // })

    }

    handleRegisterssubmit = () => {
        // console.log('email: ' ,this.state.email)
        // console.log('password: ' ,this.state.password)
        const {email, password} = this.state;
        console.log('data before send', email, password)
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            console.log('succes: ', res);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
          });
          
    }

    render() {
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title"> Register Page </p>
                    <input className="input" id="email"placeholder="Email" type="text" onChange={this.handleChangeText} />
                    <input className="input" id="password"placeholder="Password" type="password" onChange={this.handleChangeText} />
                    <button className="btn"> Register</button>
                   
                </div>
                {/* <button>Go to Dashboard</button>  */}
            </div>
        )
    }
}

export default Register;