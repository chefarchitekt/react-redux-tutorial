import React, { Component } from 'react';
import map from 'lodash/map';
//import axios from 'axios';

import TimeZone from './TimeZone';


class SignupForm extends Component {
    constructor(props) {
        super(props); //also super() if we dont use this.props
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        //or at dom level
        //<input onChange={this.onChange.bind(this)}
    }

    onChange(e) {
        /* this.setState({ username: e.target.value }); */
        //the above methos is not flexible as we needs to create 
        //separate function for each element in the form

        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        //axios.post('/api/users', { user: this.state });
        this.props.userSignupRequestProp(this.state); 
        //this makes props expect userSignupRequest function from 
        //parent component's render function (SignupPage)
    }

    render() {
        const options = map(TimeZone(), (val, key) => (<option key={val.text} value={val.value}>{val.text}</option>));
        //console.log(options);

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our community</h1>
                <div className="form-group">
                    <label className="control-label" htmlFor="username">Username</label>
                    <input 
                        onChange={this.onChange}
                        value={this.state.username}
                        type="text"
                        name="username"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="email">Email</label>
                    <input 
                        onChange={this.onChange}
                        value={this.state.email}
                        type="text"
                        name="email"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="password">Password</label>
                    <input 
                        onChange={this.onChange}
                        value={this.state.password}
                        type="text"
                        name="password"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="passwordConfirmation">Confirm Password</label>
                    <input 
                        onChange={this.onChange}
                        value={this.state.passwordConfirmation}
                        type="text"
                        name="passwordConfirmation"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="passwordConfirmation">Timezone</label>
                    <select 
                        onChange={this.onChange}
                        value={this.state.timezone}
                        name="timezone"
                        className="form-control"
                    >
                        <option value="" disabled>Choose Timezone</option>
                        {options}
                    </select>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequestProp: React.PropTypes.func.isRequired
};

export default SignupForm;
