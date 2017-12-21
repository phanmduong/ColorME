import React from 'react';
import {Provider} from 'react-redux';
import {Linking, Platform} from 'react-native';
import thunk from 'redux-thunk';
import {compose, applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/index';
import {Start} from './navigators/appRouter';
import OneSignal from "react-native-onesignal";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

class App extends React.Component {

    componentWillMount() {
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.sendTag("device_type", "mobile");
    }

    componentWillUnmount() {
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.deleteTag("device_type");
    }

    onOpened(openResult) {
        console.log(openResult);
        this.setState({URL : openResult.notification.payload.launchURL});
    }
    navigate (url) { // E
        const { navigate } = this.props.navigation;
        const route = url.replace(/.*?:\/\//g, '');
        const routeName = route.split('/')[1];
        if (routeName === 'project') {
            navigate('Login');
        };
    }

    render() {
        return (
            <Provider store={store}>
                <Start/>
            </Provider>
        );
    }
    componentDidMount() {
        OneSignal.inFocusDisplaying(2);
        if (Platform.OS === 'android') {
            Linking.getInitialURL().then((url) => {
                this.navigate(url);
            });
        } else {
            Linking.addEventListener('url', this.navigate(this.state.URL));
        }
    }
}


export default App;