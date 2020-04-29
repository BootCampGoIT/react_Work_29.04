import React, { Component } from 'react';
import { uuid } from 'uuidv4';

class Input extends Component {
    state = {
        email: '',
        login: '',
        password: '',
        error: false
    }

    textHandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitData = (e) => {
        e.preventDefault();
        const { email, login, password } = this.state;
        if (email && login && password) {
            const newUser = { id: uuid(), email, login, password };
            this.props.getUserInfo(newUser);
            this.setState({ error: false, email: '', login: '', password: '' })
        } else this.setState({ error: true })
    }


    render() {
        const { email, login, password, error } = this.state;
        return (
            <>
                <form onSubmit={this.submitData}>
                    <input type="text" value={email} name='email' onChange={this.textHandleChange} />
                    <input type="text" value={login} name='login' onChange={this.textHandleChange} />
                    <input type="password" value={password} name='password' onChange={this.textHandleChange} />
                    {error && <h2 style={{ color: 'red' }}>Введите что-нибудь!!!</h2>}
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default Input;