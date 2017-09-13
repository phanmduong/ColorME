/**
 * Created by phanmduong on 4/5/17.
 */
import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import {Stack} from './navigators/Router';


import {composeWithDevTools} from 'remote-redux-devtools';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

class App extends React.Component {
    render() {

        return (
            <Provider store={store}>
                <Stack/>
            </Provider>
        );
    }
}

export default App;