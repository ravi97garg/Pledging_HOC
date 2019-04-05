import React, {Component} from 'react';
import Auth from '../auth';

export default class Login extends Component{

    state = {
        fullname: '',
        password: '',
        email: '',
        time: new Date()
    }

    updateHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validateData = () => {
        let {fullname, password, email} = this.state;
        if(fullname === '' || password === '' || email === ''){
            alert("Please fill all the details");
            return false;
        }
        for(let i=0; i<Auth.auth.length; i++){
            if (Auth.auth[i][fullname] === password ){
                return true;
            }
        }
        alert("Invalid credentials");
        console.log(fullname, password, Auth.auth);
        return false;
    }

    submitHandle = (e) => {
        e.preventDefault();
        if (this.validateData()){
            this.setState({time: new Date()
            }, () => {
                this.props.userCallback(this.state);
                this.props.history.push('/dashboard');
            });
        } else {
            this.setState({
                fullname: '',
                email: '',
                password: ''
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.submitHandle}>
                <input type='text'
                       placeholder='Full name'
                       value={this.state.fullname}
                       name='fullname'
                       onChange={this.updateHandle}
                />
                <input type='password'
                       placeholder='Password'
                       value={this.state.password}
                       name='password'
                       onChange={this.updateHandle}
                />
                <input type='email'
                     placeholder='Email address'
                     value={this.state.email}
                     name='email'
                     onChange={this.updateHandle}
                />
                <input type='submit'
                       value='Register'
                />
            </form>
        )
    }

}