import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Router, Route, browserHistory } from 'react-router';

//import { routes } from './routes';

//render(<App />, document.getElementById('app'));
render((
    <Router history={browserHistory}>
        <Route path='/' component={App} /> 
    </Router>
), document.getElementById('app'));