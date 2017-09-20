import React, { Component } from 'react';
import SignupForm from '../components/SignupForm';

class SignupPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4-md-offset-4"> {/*.get to the middle of page.*/}
                    <SignupForm />
                </div>
            </div>
        );
    }
}

export default SignupPage;
