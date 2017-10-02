import React, { Component } from 'react';
import SignupFormTest from '../components/SignupFormTest';

class SignupPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4-md-offset-4"> {/*.get to the middle of page.*/}
                    <SignupFormTest />
                </div>
            </div>
        );
    }
}

export default SignupPage;
