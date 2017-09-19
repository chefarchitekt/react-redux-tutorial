import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';

import SignupForm from '../components/SignupForm';

class SignupPage extends Component {
    render() {
        const { userSignupRequest } = this.props;
        return (
            <div className="row">
                <div className="col-md-4-md-offset-4"> {/*.get to the middle of page.*/}
                    <SignupForm userSignupRequestProp={userSignupRequest} />
                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
};

//use connect higher order function to provide this thunk function page component from redux
//connect(mapStateToProps (state , return object), ,mapDispatchToProps)\
//mapStateToProps connect to redux store
//mapDispatchToProps psecify action creator wrapped in dispatch
export default connect((state) => { return {}; }, { userSignupRequest })(SignupPage);
