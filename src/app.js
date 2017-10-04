import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose, applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/index';
import {Main, Setting} from './navigators/appRouter';

const store = createStore(rootReducer, applyMiddleware(compose(thunk)));
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Setting/>
            </Provider>
        );
    }
}

export default App;