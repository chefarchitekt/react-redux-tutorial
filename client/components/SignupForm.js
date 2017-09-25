import React, { Component } from 'react';
import _ from 'lodash';
import classnames from 'classnames';
//import axios from 'axios';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { TextFieldGroup, SelectGroup } from '../common';
//SelectGroup is not done yet
import { userSignupRequest } from '../actions/signupActions';
import TimeZone from './TimeZone';
import validateInput from '../validations/validateInput';


class SignupForm extends Component {
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
                () => {
                    //browserHistory.push('/');
                    this.context.router.push('/');
                },
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
        const { input_errors } = this.state;
        
        const data = TimeZone();
        //console.log(JSON.stringify(data));
        //const options = (data, (val, key) => (key:val.text,  value:val.value)));
        const options = _.map(data, item => _.assign(
            { key: item.text, val: item.value }
        ));
        console.log(JSON.stringify(options));
        

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our community</h1>
                <TextFieldGroup 
                    error={input_errors.username}
                    label="Username"
                    onChange={this.onChange}
                    value={this.state.username}
                    field="username"
                    //type: 'text' is default
                />
                <TextFieldGroup 
                    error={input_errors.email}
                    label="Email"
                    onChange={this.onChange}
                    value={this.state.email}
                    field="email"
                    //type: 'text' is default
                />
                <TextFieldGroup 
                    error={input_errors.password}
                    label="Password"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"
                    type="password"
                />
                <TextFieldGroup 
                    error={input_errors.passwordConfirmation}
                    label="Confirm Password"
                    onChange={this.onChange}
                    value={this.state.passwordConfirmation}
                    field="passwordConfirmation"
                    type="password"
                />
                
                <div className={classnames('form-group', { 'has-error': input_errors.timezone })}>
                <label className="control-label" htmlFor="timezone">Timezone</label>
                <select 
                    onChange={this.onChange}
                    value={this.state.timezone}
                    name="timezone"
                    className="form-control"
                >
                    <option value="" disabled>Choose Timezone</option>
                    {options.map(opt => {
                    return (
                    <option
                        key={opt.key}
                        value={opt.val}
                    >
                        {opt.key}
                    </option>
                    );
                })}
                </select>
                {input_errors.timezone && <span className="help-block">{input_errors.timezone}</span>}
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

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
};

SignupForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};

//use connect higher order function to provide this thunk function page component from redux
//connect(mapStateToProps (state , return object), ,mapDispatchToProps)\
//mapStateToProps connect to redux store
//mapDispatchToProps psecify action creator wrapped in dispatch


//export default connect((state) => { return {}; }, { userSignupRequest })(SignupPage);

export default connect(null, { userSignupRequest })(SignupForm);

