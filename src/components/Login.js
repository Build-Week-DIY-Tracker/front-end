import React, { useState } from 'react'
import axios from 'axios';

export default function Login() {
    const [user, setUser] = useState({
        username: '',
        password: '',
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
        axios.post('https://lrod-diytracker.herokuapp.com/login', `grant_type=password&username=${user.username}&password=${user.password}`, {

            headers: {
                Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }) 
        .then(res => { console.log('RESPONSE', res.data) }) 
        .catch(err => console.log(err.response));
    }
    return (
        <div className="user-form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}
