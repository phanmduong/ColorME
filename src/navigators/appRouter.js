import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as color from '../styles/color';
import * as size from '../styles/size';

// MAIN SCREEN
import newFeedComponent from '../components/newFeedComponent';
import searchComponent from '../components/searchComponent';
import messageComponent from '../components/messageComponent';
import notificationComponent from '../components/notificationComponent';
import setupComponent from '../components/setupComponent';

import getFullInfoAboutOnePostComponent from '../components/getFullInfoAboutOnePostComponent';
import userComponent from '../components/userComponent';
import addFriendComponent from '../components/addFriendComponent';


import loginComponent from '../components/loginComponent';

export const NewFeed = StackNavigator(
    {
        NewFeed: {
            screen: newFeedComponent,
            navigationOptions: {
                header: null,
            },
        },
        User:{
            screen: userComponent,
            navigationOptions: {
                header: null,
                tabBarVisible: false,
            },
        },
        Post:{
            screen: getFullInfoAboutOnePostComponent,
            navigationOptions: {
                header: null,
                tabBarVisible: false,
            },
        }

    }
);

export const Home = TabNavigator(
    {
        NewFeed: {
            screen: NewFeed,
            navigationOptions:{
                tabBarIcon:
                    <Icon name="home" size={size.icon} color={color.gray} />
            }
        },
        Search: {
            screen: searchComponent,
            navigationOptions:{
                tabBarIcon:
                    <Icon name="search" size={size.icon} color={color.gray} />
            }
        },
        Message: {
            screen: messageComponent,
            navigationOptions:{
                tabBarIcon:
                    <Icon name="comments" size={size.icon} color={color.gray} />
            }
        },
        Notification: {
            screen: notificationComponent,
            navigationOptions:{
                tabBarIcon:
                    <Icon name="bell" size={size.icon} color={color.gray} />
            }
        },
        Setup: {
            screen: setupComponent,
            navigationOptions:{
                tabBarIcon:
                    <Icon name="user" size={size.icon} color={color.gray}/>
            }
        },
    },
    {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        style:{
            height: 40,
        },
        showLabel: false,
        activeBackgroundColor: color.main,
        }
    }
);

export const Main = StackNavigator(
    {
        Login: {
            screen: loginComponent,
            navigationOptions: {
                header: null,
            },
        },
        Home:{
            screen: Home,
            navigationOptions: {
                header: null,
            },
        }

})