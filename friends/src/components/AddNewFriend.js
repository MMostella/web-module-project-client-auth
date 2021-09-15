import React from "react";
import axios from "axios";

class AddNewFriend extends React.Component {
    state = {
        person: {
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = e => {
        this.setState({
            person: {
                ...this.state.creds,
                [e.target.name]: e.target.value
            }
        })
    }

    add = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/friends', this.state.person)
            .then(res => {
                this.setState(res.data.payload)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.add}>
                    <h1>Add New Friend</h1>
                    <div>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            value={this.state.person.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type='number'
                            name='age'
                            placeholder='Age'
                            value={this.state.person.age}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={this.state.person.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddNewFriend;