import React from 'react';
import './login.css';
import axios from 'axios';

class Login extends React.Component {
    login = (event) =>{
        event.preventDefault();
        var obj={
        email:document.getElementById('mail').value,
        password:document.getElementById('password').value
        }
        axios.post('http://localhost:5000/api/user/login',obj)
        .then(resp =>{
            if(resp.data.message==='Success'){
                localStorage.setItem("userData", JSON.stringify(obj))
                window.location.replace('http://localhost:3000/home');}
            else
                alert(resp.data.message);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        return (
            <div className="App">
                <form onSubmit={(e)=>this.login(e)}>
                    <h1>Sign In</h1>
                        <label>Email:</label>
                        <input type="email" id="mail" name="username" required />
                        <label>Password:</label>
                        <input type="password" id="password" name="password" required />
                        <button onClick={this.login}>Sign In</button>
                    <p>Don't have an account <a href="http://localhost:3000/signup">SignUp</a></p>
                </form>
            </div>
        );
    }
}

export default Login;