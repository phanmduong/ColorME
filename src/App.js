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
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.sendTag("device_type", "mobile");
    }

    componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.deleteTag("device_type");
    }

    onReceived(notification) {
        console.log("Notification received: ", notification);
    }

    onOpened(openResult) {
        if (Platform.OS === 'android') {
            Linking.getInitialURL().then(() => {
                this.navigate(openResult.notification.payload.launchURL);
            });
        } else {
            Linking.addEventListener('url', this.navigate);
        }
    }
    navigate (url) { // E
        const { navigate } = this.props.navigation;
        const route = url.replace(/.*?:\/\//g, '');
        const routeName = route.split('/')[0];
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
       OneSignal.configure({
           onNotificationReceived : this.navigate
       })
    }
}


export default App;