import React from "react";
import axios from 'axios';

class Login extends React.Component {
    state = {
        creds: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            creds: {
                ...this.state.creds,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state.creds)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                localStorage.setItem('username', res.data.payload);
                this.props.history.push('/friends');
            })
            .catch(err => { 
                console.log(err)
                alert('You have no access to this page!')
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.creds.username}
                        onChange={this.handleChange}
                        placeholder='Username'
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.creds.password}
                        onChange={this.handleChange}
                        placeholder='Password'
                    />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;