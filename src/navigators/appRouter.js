import React from 'react';
import {TabBarIOS} from 'react-native'
import {TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as color from '../constants/color';

// MAIN SCREEN
import newFeedComponent from '../components/newFeedComponent';
import searchComponent from '../components/searchComponent';
import messageComponent from '../components/messageComponent';
import notificationComponent from '../components/notificationComponent';
import userComponent from '../components/userComponent';
import addFriendComponent from '../components/addFriendComponent';

export const Home = TabNavigator(
    {
        NewFeed: {
            screen: newFeedComponent,
            navigationOptions:{
                tabBarIcon:
                    <Icon name="home" size={18} color={color.gray} />
            }
        },
        Search: {
            screen: searchComponent,
            navigationOptions:{
                tabBarIcon:
                    <Icon name="search" size={18} color={color.gray} />
            }
        },
        Message: {
            screen: messageComponent,
            navigationOptions:{
                tabBarIcon:
                    <Icon name="comments" size={18} color={color.gray} />
            }
        },
        Notification: {
            screen: notificationComponent,
            navigationOptions:{
                tabBarIcon:
                    <Icon name="bell" size={18} color={color.gray} />
            }
        },
        User: {
            screen: userComponent,
            navigationOptions:{
                tabBarIcon:
                    <Icon name="user" size={18} color={color.gray}/>
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
        activeBackgroundColor: color.mainColor,
        }
    }
);