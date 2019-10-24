import React, { useState } from 'react'
import { setLinkText } from '../actions';
import axios from 'axios';
import { connect } from 'react-redux';

const Login = props => {
    console.log(props);
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
        axios.post('https://lrod-diytracker.herokuapp.com/login', `grant_type=password&username=${user.username}&password=${user.password}`, {
            headers: {
                Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }) 
        .then(res => { 
            console.log('RESPONSE', res.data)
            localStorage.setItem('token', res.data.access_token)
            props.setLinkText('Logout');
            props.history.push('/projectform')
        }) 
        .catch(err => console.log(err.response));
    }
    return (
        <div className="user-form">
            <h2>Sign-in</h2>
            <form onSubmit={handleSubmit}>
                <p>Username:</p>
                <input required type="text" name="username" placeholder="Username" onChange={handleChange} />
                <p>Password:</p>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <div className="button"><button type="submit">Submit!</button></div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        linktext: state.linktext
    }
}


export default connect(mapStateToProps, { setLinkText })(Login)