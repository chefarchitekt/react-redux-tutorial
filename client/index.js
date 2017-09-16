import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './pages/SignupPage'

//import { routes } from './routes';

//render(<App />, document.getElementById('app'));
render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Greetings} />
            <Route path="signup" component={SignupPage} />
        </Route>
    </Router>
), document.getElementById('app'));