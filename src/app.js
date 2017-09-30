import React from 'react';
import {View, Text} from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Main} from './navigators/appRouter';
import RegisterComponent from './components/registerComponent'

class App extends React.Component {
    render() {
        return (
        	<Main/>
        );
    }
}

export default App;