import React, { Component } from 'react'
import Input from '../input/Input';
import List from '../list/List';

class Tasks extends Component {
    state = {
        users: []
    }
    
    getUserInfo = (newUser) => {
        this.setState(prevstate => ({
            users: [...prevstate.users, newUser]
        }))
    }


    deleteItem = (e) => {
        const id = e.target.id;
        this.setState(prevstate => ({
            users: [...prevstate.users.filter(user => user.id !== id)]
        }))
    }
    
    render() {
        const { users } = this.state;
        return (
            <>
                <Input getUserInfo={this.getUserInfo} />
                <List users={users} deleteItem={this.deleteItem} />
            </>
        );

    }
}

export default Tasks;