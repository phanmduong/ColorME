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
   constructor(){
       super();
       this.onOpened = this.onOpened.bind(this);
       this.onReceived = this.onReceived.bind(this);
   }
    // componentWillMount() {
    //     OneSignal.sendTag("device_type", "mobile");
    // }
    //
    // componentWillUnmount() {
    //     OneSignal.removeEventListener('opened', this.onOpened);
    //     OneSignal.deleteTag("device_type");
    // }
    //
    // onOpened(openResult) {
    //     console.log(openResult.notification.payload.launchURL);
    //     this.navigate(openResult.notification.payload.launchURL);
    // }
    // navigate (url) { // E
    //     const { navigate } = this.props.navigation;
    //     const route = url.replace(/.*?:\/\//g, '');
    //     const routeName = route.split('/')[1];
    //     if (routeName === 'project') {
    //         navigate('Main');
    //     };
    // }
    componentWillMount() {
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('registered', this.onRegistered);
        OneSignal.addEventListener('ids', this.onIds);
    }

    componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('registered', this.onRegistered);
        OneSignal.removeEventListener('ids', this.onIds);
    }

    onReceived(notification) {
        console.log("Notification received: ", notification);
    }

    onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
    }

    onRegistered(notifData) {
        console.log("Device had been registered for push notifications!", notifData);
    }

    onIds(device) {
        console.log('Device info: ', device);
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
        OneSignal.configure({
            onNotificationOpened : this.onOpened
        })
    }
}


export default App;