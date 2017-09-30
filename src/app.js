import React from 'react';
import {View, Text} from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Home} from './navigators/appRouter';

class App extends React.Component {
    render() {
        return (
        	<Home/>
        );
    }
}

export default App;