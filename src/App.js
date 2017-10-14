import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose, applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/index';
import {AsyncStorage} from 'react-native';
import {setAuthorizationToken} from './actions/loginActions'
import {Main ,Start, SearchStackNavigator} from './navigators/appRouter';

const store = createStore(rootReducer, applyMiddleware(compose(thunk)));
if(AsyncStorage.getItem('@ColorMe:token')){
  setAuthorizationToken(AsyncStorage.getItem('@ColorMe:token'))
    // store.dispatch(setCurrentUser(jwt.decode(AsyncStorage.getItem('@ColorMe:token'))))
}
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
              <Start/>
            </Provider>
        );
    }
}

export default App;