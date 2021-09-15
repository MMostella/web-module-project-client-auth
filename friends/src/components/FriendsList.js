import React from "react";
import { Link } from 'react-router-dom';
import axiosWithAuth from "../utils/axiosWithAuth";


class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                this.setState({
                    ...this.state,
                    friends: res.data,
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const friends = this.state.friends;
        return (
            <div>
                <h1>Friends List</h1>
                <div>
                    {friends.map(person => (
                        <div key={person.id}>
                            <h3>{person.name}</h3>
                            <div>
                                {`Age: ${person.age}`}
                            </div>,
                            <div>
                                {`Email: ${person.email}`}
                            </div>
                        </div>
                    ))}
                </div>
                <button>
                    <Link to='/add'>Add New Friend</Link>
                </button>
            </div>
        )
    }
}

export default FriendsList;