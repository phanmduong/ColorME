import React from 'react';
import {Provider} from 'react-redux';
import {Linking, Platform} from 'react-native';
import thunk from 'redux-thunk';
import {compose, applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/index';
import AppWithNavigationState from './navigators/AppNavigator';
import OneSignal from "react-native-onesignal";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

class App extends React.Component {
   constructor(){
       super();
   }

    render() {

        return (
            <Provider store={store}>
               <AppWithNavigationState/>
            </Provider>
        );
    }
}


export default App;