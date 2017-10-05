import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as color from '../styles/color';
import * as size from '../styles/size';

// LOGIN
import tabLoginAndRegister from '../components/loginRegisterComponent/tabLoginAndRegister';

// MAIN SCREEN
import newFeedComponent from '../components/newFeedComponent';
import messageComponent from '../components/messageComponent/messageComponent';
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

// MESSAGE
import Chat from '../components/messageComponent/chat';
import OnlineFriend from '../components/messageComponent/onlineFriend';

// MY ACCOUNT
import myAccountComponent from '../components/myAccountComponent/myAccountComponent';

//SETTING
import setting from '../components/myAccountComponent/setting';
import aboutUs from '../components/myAccountComponent/aboutUs';
import changePassword from '../components/myAccountComponent/changePassword';
import updateInformation from '../components/myAccountComponent/updateInformation';
import feedback from '../components/myAccountComponent/feedback';
import contactUs from '../components/myAccountComponent/contactUs';


export const TabNavigatorStyle = {
    tabBarPosition: 'top',
    tabBarOptions: {
        activeTintColor: color.main,
        style:{
            height: 40,
            borderTopWidth: 0,
        },
        labelStyle:{
            fontSize: size.describe,
            padding: 8,
        },

    }
};


export const Message = TabNavigator (
    {
        Chat:{
            screen: Chat,
            navigationOptions:{
                tabBarLabel: 'Tin nhắn',
            }
        },
        OnlineFriend: {
            screen: OnlineFriend,
            navigationOptions:{
                tabBarLabel: 'Đang hoạt động',
            }
        },
    },
    TabNavigatorStyle
);
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
                borderTopWidth: 0,
            },
            labelStyle:{
                fontSize: size.describe,
                padding: 8,
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
        ChangePassword:{
            screen: changePassword,
            navigationOptions: {
                header: null,
                tabBarVisible: false,
            },
        },
        UpdateInformation:{
            screen: updateInformation,
            navigationOptions: {
                header: null,
                tabBarVisible: false,
            },
        },
        ContactUs:{
            screen: contactUs,
            navigationOptions: {
                header: null,
                tabBarVisible: false,
            },
        },
        Feedback:{
            screen: feedback,
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
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="home" size={20}
                        color={tintColor}
                    />
                ),
            }
        },
        Search: {
            screen: searchComponent,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="search" size={size.icon}
                        color={tintColor}
                    />
                ),
            }
        },
        Message: {
            screen: messageComponent,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="comments" size={size.icon}
                        color={tintColor}
                    />
                ),
            }
        },
        Notification: {
            screen: notificationComponent,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="bell" size={size.icon}
                        color={tintColor}
                    />
                ),
            }
        },
        MyAccount: {
            screen: MyAccount,
            navigationOptions:{
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="user" size={size.icon}
                        color={tintColor}
                    />
                ),
            }
        },
    },
    {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: color.main,
        style:{
            height: 40,
        },
        showLabel: false,
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