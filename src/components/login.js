import React, {Component} from 'react';
import Auth from '../auth';
import './login.css';

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
            <div className='login-form'>
                <div>
                    <p>I, an Indian citizen, take oath that I will exercise my valuable right given by the Constitution of India, of casting my vote, under every possible circumstance and whenever I get the opportunity. Election of our representative by voting is not only our right but also our duty towards the country.</p>

                    <p>I will make all possible efforts to use my vote to elect a public representative who would meet nation's expectations and,</p>

                    <p>I also take oath that I would also encourage other people to vote with awareness.</p>
                </div>
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
                           value='Submit'
                    />
                </form>
            </div>
        )
    }

}