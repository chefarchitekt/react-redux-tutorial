import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './pages/SignupPage'

//import { routes } from './routes';

//create Store(reducer, initial state, middleware)
const store = createStore(
    (state = {}) => state, //root reducer(function that takes state and action and return NEW STATE)
    //2nd parameter is an initial state which do not have or could not need
    applyMiddleware(thunk) //apply middleware. We use thunk to dispatch asynch action.
);

//render(<App />, document.getElementById('app'));
render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Greetings} />
                <Route path="signup" component={SignupPage} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));
