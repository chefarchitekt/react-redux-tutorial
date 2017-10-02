import React, { Component } from 'react';
import _ from 'lodash';
import classnames from 'classnames';
//import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TextFieldGroup } from '../common';
//SelectGroup is not done yet
import { signupUserInput, userSignupRequest, signupUserInputError, addFlashMessage } from '../actions';
import TimeZone from './TimeZone';
import validateSignupInput from '../validations/validateSignupInput';


class SignupFormTest extends Component {
    constructor(props) {
        super(props); //also super() if we dont use this.props
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
       this.props.signupUserInput({ prop: [e.target.name], value: e.target.value });
    }

    onSubmit(e) {
        const { 
            username, 
            email, 
            password, 
            passwordConfirmation, 
            timezone
        } = this.props;

        e.preventDefault();

        if (this.isValid) {
            this.props.userSignupRequest({ 
                username, 
                email, 
                password, 
                passwordConfirmation, 
                timezone
            }, this.context);

            /*
                if (isLoading) {

                }
            */  
        }
    }

    isValid() {
        const { 
            username, 
            email, 
            password, 
            passwordConfirmation, 
            timezone
        } = this.props;
        const { errors, isValid } = validateSignupInput({ 
            username, 
            email, 
            password, 
            passwordConfirmation, 
            timezone
        });
        if (!isValid) {
            this.props.signupUserInputError(errors);
        }

        return isValid;
    }

    render() {
        const inputErrors = this.props.input_errors;
        const data = TimeZone();
        //console.log(JSON.stringify(data));
        //const options = (data, (val, key) => (key:val.text,  value:val.value)));
        const options = _.map(data, item => _.assign(
            { key: item.text, val: item.value }
        ));
        //console.log(JSON.stringify(options));
    
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our community</h1>
                <TextFieldGroup 
                    error={inputErrors.username}
                    label="Username"
                    onChange={this.onChange}
                    value={this.props.username}
                    field="username"
                    //type: 'text' is default
                />
                <TextFieldGroup 
                    error={inputErrors.email}
                    label="Email"
                    onChange={this.onChange}
                    value={this.props.email}
                    field="email"
                    //type: 'text' is default
                />
                <TextFieldGroup 
                    error={inputErrors.password}
                    label="Password"
                    onChange={this.onChange}
                    value={this.props.password}
                    field="password"
                    type="password"
                />
                <TextFieldGroup 
                    error={inputErrors.passwordConfirmation}
                    label="Confirm Password"
                    onChange={this.onChange}
                    value={this.props.passwordConfirmation}
                    field="passwordConfirmation"
                    type="password"
                />
                
                <div className={classnames('form-group', { 'has-error': inputErrors.timezone })}>
                <label className="control-label" htmlFor="timezone">Timezone</label>
                <select 
                    onChange={this.onChange}
                    value={this.props.timezone}
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
                {inputErrors.timezone && <span className="help-block">{inputErrors.timezone}</span>}
            </div>

                <div className="form-group">
                    <button disabled={this.props.isLoading} className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        );
    }
}

SignupFormTest.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
};

SignupFormTest.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    const { 
        username, 
        email, 
        password, 
        passwordConfirmation, 
        timezone, 
        isLoading,
        input_errors,
        server_errors
    } = state.userSignup;

    return { 
        username, 
        email, 
        password, 
        passwordConfirmation, 
        timezone, 
        isLoading,
        input_errors,
        server_errors
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signupUserInput,
        signupUserInputError,
        userSignupRequest, //userSignupRequest: userSignupRequest,
        addFlashMessage //addFlashMessage: addFlashMessage
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormTest);

