import React, { useState } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function RegisterTest() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        primaryemail: '',
    })

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(user); 
        axios.post('https://lrod-diytracker.herokuapp.com/createnewuser', 
        user) .then(res => { 
            return res.status === 200 ? <Redirect to='/' /> : console.log(res);
        })
        .catch(err => console.log(err.response));
    }
    
    return (
        <div className="user-form">
            <h2>Register Here!</h2>
            <form onSubmit={handleSubmit} className="register">
                <p>Pick a username:</p>
                <input required type="text" name="username" placeholder="Username" onChange={handleChange} />
                <p>Pick a password:</p>
                <input required type="password" name="password" placeholder="Password" onChange={handleChange} />
                <p>Enter your email:</p>
                <input required type="text" name="primaryemail" placeholder="Email" onChange={handleChange} />
                <div className="button"><button type="submit">Submit!</button></div>
            </form>
        </div>
    )
}
