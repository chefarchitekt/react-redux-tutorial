import React, { Component } from 'react';
import map from 'lodash/map';
//import axios from 'axios';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { userSignupRequest } from '../actions/signupActions';
import TimeZone from './TimeZone';
import validateInput from '../validations/validateInput';


class SignupFormOld extends Component {
    constructor(props) {
        super(props); //also super() if we dont use this.props
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            isLoading: false,
            input_errors: {},
            server_errors: {}
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
        if (this.isValid()) {
            this.setState({ input_errors: {}, server_errors: {}, isLoading: true });
            console.log(this.state);
            //axios.post('/api/users', { user: this.state });
            this.props.userSignupRequest(this.state).then(
                () => {},
                ({ err }) => {
                    console.log(err);
                    this.setState({ input_errors: err.data, server_errors: err });
                }
            );
            //this makes props expect userSignupRequest function from 
            //parent component's render function (SignupPage)
        }
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
            this.setState({ input_errors: errors });
        }

        return isValid;
    }

    render() {
        const { errors } = this.state;
        const options = (map(TimeZone(), (val, key) => (<option key={val.text} value={val.value}>{val.text}</option>)));
        //console.log(options);

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our community</h1>
                
                <div className={classnames('form-group', { 'has-error': errors.username })}>
                    <label className="control-label" htmlFor="username">Username</label>
                    <input 
                        onChange={this.onChange}
                        value={this.state.username}
                        type="text"
                        name="username"
                        className="form-control"
                    />
                    {errors.username && <span className="help-block">{errors.email}</span>}
                </div>
                <div className={classnames('form-group', { 'has-error': errors.username })}>
                    <label className="control-label" htmlFor="email">Email</label>
                    <input 
                        onChange={this.onChange}
                        value={this.state.email}
                        type="text"
                        name="email"
                        className="form-control"
                    />
                    {errors.email && <span className="help-block">{errors.username}</span>}
                </div>
                <div className={classnames('form-group', { 'has-error': errors.email })}>
                    <label className="control-label" htmlFor="password">Password</label>
                    <input 
                        onChange={this.onChange}
                        value={this.state.password}
                        type="text"
                        name="password"
                        className="form-control"
                    />
                    {errors.username && <span className="help-block">{errors.email}</span>}
                </div>
                <div className={classnames('form-group', { 'has-error': errors.password })}>
                    <label className="control-label" htmlFor="passwordConfirmation">Confirm Password</label>
                    <input 
                        onChange={this.onChange}
                        value={this.state.passwordConfirmation}
                        type="text"
                        name="passwordConfirmation"
                        className="form-control"
                    />
                    {errors.username && <span className="help-block">{errors.username}</span>}
                </div>
                <div className={classnames('form-group', { 'has-error': errors.timezone })}>
                    <label className="control-label" htmlFor="timezone">Timezone</label>
                    <select 
                        onChange={this.onChange}
                        value={this.state.timezone}
                        name="timezone"
                        className="form-control"
                    >
                        <option value="" disabled>Choose Timezone</option>
                        {options}
                    </select>
                    {errors.username && <span className="help-block">{errors.username}</span>}
                </div>

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        );
    }
}

SignupFormOld.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
};

//use connect higher order function to provide this thunk function page component from redux
//connect(mapStateToProps (state , return object), ,mapDispatchToProps)\
//mapStateToProps connect to redux store
//mapDispatchToProps psecify action creator wrapped in dispatch


//export default connect((state) => { return {}; }, { userSignupRequest })(SignupPage);

export default connect(null, { userSignupRequest })(SignupFormOld);

