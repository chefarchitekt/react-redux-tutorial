import React, { Component } from 'react';
import Greetings from './Greetings';

/*
export default () => {
    return (
        <h1>Hello from React!!!</h1>
    );
}
*/

//need to use a class component for the top of hirerarchy instead of functional component
//for hot loading to work
class App extends Component {
    render() {
        return (
            <Greetings />
        );
    }
}

export default App;