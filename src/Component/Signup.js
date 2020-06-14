import React from 'react';
import './login.css';
import axios from 'axios';

class Signup extends React.Component {
    signUp = (e)=>{
        e.preventDefault();
        var obj={
        name:document.getElementById('name').value,
        email:document.getElementById('mail').value,
        password:document.getElementById('password').value
        }
        axios.post('http://localhost:5000/api/user/signup',obj)
        .then(resp =>{
            if(resp.data.message==='Success')
                window.location.replace('http://localhost:3000');
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
                <form onSubmit={(e)=>this.signUp(e)}>
                    <h1>Sign Up</h1>
                    <legend>Your basic info</legend>
                    <label >Name:</label>
                    <input type="text" id="name" name="user" required />
                    <label >Email:</label>
                    <input type="email" id="mail" name="username" required />
                    <label>Password:(Provide as same as the email password)</label>
                    <input type="password" id="password" name="password" required />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default Signup;