import React from 'react';
import config from './firebase/config';

class Login extends React.Component {

    login(){s
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email, password)
        .then((u) => {
            console.log("Successfully Logged In");
        })
        .catch((err) => {
            console.log("Error: " + err.toString());
        })
    }

    signUp(){
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((u) => {
            console.log("Successfully Signed Un");
        })
        .catch((err) => {
            console.log("Error: " + err.toString());
        })

    }
    
    render(){
        return (
            <div className="login-fitur">
            <div style={{ textAlign: 'center'}}>
                <br></br>
                <h2>Login & Sign Up</h2>
                <div>
            <div className="form">
                    <div>Email</div>
                    <input id="email"  placeholder="Enter Email" type="text"/>
                    </div>
                </div>
                <div>
                <div className="form2">
                    <div>Password</div>
                    <input id="password" placeholder="Enter Password" type="password"/>
                    </div>
                </div>
                <button className="btn btn-sm btn-dark" style={{margin: '10px'}} onClick={this.login}>Login</button>
                <button className="btn btn-sm btn-dark" style={{margin: '10px'}} onClick={this.signUp}>Sign-Up</button>
                </div>
            </div>
        )
    }
}

export default Login;