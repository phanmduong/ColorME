import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as color from '../styles/color';
import * as size from '../styles/size';

// LOGIN
import tabLoginAndRegister from '../components/loginRegisterComponent/tabLoginAndRegister';

// MAIN SCREEN
import newFeedComponent from '../components/newFeedComponent';
import messageComponent from '../components/messageComponent';
import notificationComponent from '../components/notificationComponent';

import getFullInfoAboutOnePostComponent from '../components/getFullInfoAboutOnePostComponent';

// USER SCREEN
import userComponent from '../components/userComponent/userComponent';
import information from '../components/userComponent/information';
import project from '../components/userComponent/project';
import process from '../components/userComponent/process';

// SEARCH SCREEN
import searchComponent from '../components/searchComponent/searchComponent';
import searchUser from '../components/searchComponent/searchUser';
import searchProduct from '../components/searchComponent/searchProduct';

// MY ACCOUNT
import myAccountComponent from '../components/myAccountComponent/myAccountComponent';
//SETTING
import setting from '../components/myAccountComponent/setting';
import aboutUs from '../components/myAccountComponent/aboutUs';

export const Search = TabNavigator(
    {
        SearchUser: {
            screen: searchUser,
            navigationOptions:{
                tabBarLabel: 'Người dùng',
            }
        },
        SearchProduct: {
            screen: searchProduct,
            navigationOptions:{
                tabBarLabel: 'Bài đăng',
            }
        },
    },
    {
        tabBarPosition: 'top',
        tabBarOptions: {
            activeTintColor: color.main,
            style:{
                height: 40,
            },
            labelStyle:{
                fontSize: size.describe,
                padding: 7,
            },

        }
    }
);
export const Setting = StackNavigator(
    {
        Setting:{
            screen: setting,
            navigationOptions: {
                header: null,
            },
        },
        AboutUs:{
            screen: aboutUs,
            navigationOptions: {
                header: null,
                tabBarVisible: false,
            },
        },

    }
);
export const MyAccount = StackNavigator(
    {
        MyAccount: {
            screen: myAccountComponent,
            navigationOptions: {
                header: null,
            },
        },

        Setting:{
            screen: Setting,
            navigationOptions: {
                header: null,
            },
        },
    }
);

export const User = TabNavigator(
    {
        Information: {
            screen: information,
            navigationOptions:{
                tabBarLabel: 'Thông tin',
            }
        },
        Project: {
            screen: project,
            navigationOptions:{
                tabBarLabel: 'Dự án',
            }
        },
        Process: {
            screen: process,
            navigationOptions:{
                tabBarLabel: 'Tiến độ',
            }
        },

    },
    {
        tabBarPosition: 'top',
        tabBarOptions: {
            activeTintColor: color.main,
            style:{
                height: 40,
            },
            labelStyle:{
                fontSize: size.describe,
                padding: 7,
            },

        }
    }
);

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
        MyAccount: {
            screen: MyAccount,
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
            screen: tabLoginAndRegister,
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