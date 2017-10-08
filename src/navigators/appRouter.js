import React from 'react';
import {
    DrawerItems
} from 'react-native';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as color from '../styles/color';
import * as size from '../styles/size';

// LOGIN
import tabLoginAndRegister from '../components/loginRegisterComponent/tabLoginAndRegister';

// MAIN SCREEN
import newFeedComponent from '../components/newfeedComponent/newFeedComponent';
import messageComponent from '../components/messageComponent/messageComponent';
import notificationComponent from '../components/notificationComponent';

import commentComponent from '../components/CommentComponent'
import SlideViewComponent from '../components/SlideViewComponent'

import getFullInfoAboutOnePostComponent from '../components/getFullInfoAboutOnePost';

// USER SCREEN
import userComponent from '../components/userComponent/userComponent';
import information from '../components/userComponent/information';
import project from '../components/userComponent/project';
import process from '../components/userComponent/progress';

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
import courseComponent from '../components/courseComponent';

export const TabNavigatorTopStyle = {
    tabBarPosition: 'top',
    tabBarOptions: {
        activeTintColor: color.main,
        style: {
            height: 40,
            borderTopWidth: 0,
            backgroundColor: color.navTitle
        },
        labelStyle: {
            fontSize: size.describe,
            padding: 8,
        },

    }
};
export const TabNavigatorBottomStyle = {
    initialRouteName: 'NewFeed',
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: color.darkGray,
        inactiveTintColor: color.icon,
        style: {
            height: 40,
            backgroundColor: color.navTitle,
            borderTopWidth: 0,
        },
        showLabel: false,
    }
};

export const StackNavigatorStyle = {
    navigationOptions: {
        header: null
    },
};

export const HomeStackStyle = {
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: color.navTitle,
            borderBottomWidth: 0,
            height: 60,
        },
        headerLeft: (<Icon name="bars"
                           color={color.icon}
                           size={size.icon}
                           style={{paddingLeft: 10}}
                           onPress={()=> navigation.navigate('DrawerOpen')}
        />),
        headerRight: (<Icon name="comments"
                           color={color.icon}
                           size={size.icon}
                           style={{paddingRight: 10}}
        />),
    }),
};

export const MessageTab = TabNavigator(
    {
        Chat: {
            screen: Chat,
            navigationOptions: {
                tabBarLabel: 'Tin nhắn',
            }
        },
        OnlineFriend: {
            screen: OnlineFriend,
            navigationOptions: {
                tabBarLabel: 'Đang hoạt động',
            }
        },
    },
    TabNavigatorTopStyle
);

export const SearchTab = TabNavigator(
    {
        SearchUser: {
            screen: searchUser,
            navigationOptions: {
                tabBarLabel: 'Người dùng',
            }
        },
        SearchProduct: {
            screen: searchProduct,
            navigationOptions: {
                tabBarLabel: 'Bài đăng',
            }
        },
    },
    TabNavigatorTopStyle
);

export const Setting = StackNavigator(
    {
        Setting: {
            screen: setting,
            navigationOptions: {

            },
        },
        AboutUs: {
            screen: aboutUs,
            navigationOptions: {

                tabBarVisible: false,
            },
        },
        ChangePassword: {
            screen: changePassword,
            navigationOptions: {

                tabBarVisible: false,
            },
        },
        UpdateInformation: {
            screen: updateInformation,
            navigationOptions: {

                tabBarVisible: false,
            },
        },
        ContactUs: {
            screen: contactUs,
            navigationOptions: {

                tabBarVisible: false,
            },
        },
        Feedback: {
            screen: feedback,
            navigationOptions: {

                tabBarVisible: false,
            },
        },

    }
);

export const User = TabNavigator(
    {
        Information: {
            screen: information,
            navigationOptions: {
                tabBarLabel: 'Thông tin',
            }
        },
        Project: {
            screen: project,
            navigationOptions: {
                tabBarLabel: 'Dự án',
            }
        },
        Process: {
            screen: process,
            navigationOptions: {
                tabBarLabel: 'Tiến độ',
            }
        },

    },
    TabNavigatorTopStyle
);

export const NewFeedStackNavigator = StackNavigator(
    {
        NewFeedStack: {
            screen: newFeedComponent,
            navigationOptions:{
                title: 'colorME',
                headerTintColor: color.main,
            },
        },
        UserStack: {
            screen: userComponent,
            navigationOptions: {
                tabBarVisible: false,
            },
        },
        PostStack: {
            screen: getFullInfoAboutOnePostComponent,
            navigationOptions: {
                tabBarVisible: false,
            },
        },
        CourseStack: {
            screen: courseComponent,
            navigationOptions: {
                tabBarVisible: false,
            },
        },
        CommentStack: {
            screen: commentComponent,
            navigationOptions: {
                tabBarVisible: false,
            }
        }

    }, HomeStackStyle
);

export const NotificationStackNavigator = StackNavigator(
    {
        NotificationStack: {
            screen: notificationComponent,
            navigationOptions:{
                title: 'Thông báo',
            }
        }
    },StackNavigatorStyle
);


export const SearchStackNavigator = StackNavigator(
    {
        SearchStack: {
            screen: searchComponent,
            navigationOptions:{
                title: 'Thông báo',
            }
        }
    },StackNavigatorStyle
);


export const MessageStackNavigator = StackNavigator(
    {
        MessageStack: {
            screen: messageComponent,
            navigationOptions:{
                title: 'Tin nhắn',
            }
        }
    },StackNavigatorStyle
);

export const MyAccountStackNavigator = StackNavigator(
    {
        MyAccountStack: {
            screen: myAccountComponent,
            navigationOptions:{
                title: 'Tài khoản',
            }
        }
    },StackNavigatorStyle
);

export const Home = TabNavigator(
    {
        Notification: {
            screen: NotificationStackNavigator,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="bell" size={size.icon}
                        color={tintColor}
                    />
                ),
            }
        },

        Search: {
            screen: SearchStackNavigator,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="search" size={size.icon}
                        color={tintColor}
                    />
                ),
            }
        },
        NewFeed: {
            screen: NewFeedStackNavigator,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="home" size={20}
                        color={tintColor}
                    />
                ),
            }
        },
        Message: {
            screen: MessageStackNavigator,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="comments" size={size.icon}
                        color={tintColor}
                    />
                ),
            }
        },

        MyAccount: {
            screen: MyAccountStackNavigator,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="user" size={size.icon}
                        color={tintColor}
                    />
                ),
            }
        },
    },
    TabNavigatorBottomStyle
);

export const Drawer = DrawerNavigator(
    {
        Home: {screen: Home},
    },
    {
        drawerWidth: size.wid * 3/4,
        drawerPosition: 'left',
        contentComponent: props => <SlideViewComponent {...props} />
    }
);

export const Main = StackNavigator(
    {
        Drawer: {
            screen: Drawer
        }
    },
    {
        headerMode: 'none'
    }
);

export const Start = StackNavigator(
    {
        Login: {
            screen: tabLoginAndRegister,
            navigationOptions: {
                header: null,
            },
        },
        Main: {
            screen: Main,
            navigationOptions: {
                header: null,
            },
        }

    });