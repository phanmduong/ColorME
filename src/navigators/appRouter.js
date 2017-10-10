import React from 'react';
import {
    DrawerItems
} from 'react-native';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import Icon from '../commons/Icon';
import * as color from '../styles/color';
import * as size from '../styles/size';

// LOGIN
import tabLoginAndRegister from '../components/loginRegister/tabLoginAndRegister';

// MAIN SCREEN
import newFeedComponent from '../components/NewFeedComponent';
import messageComponent from '../components/message/messageComponent';
import notificationComponent from '../components/NotificationComponent';
import AchievementsComponent from '../components/AchievementsComponent';
import SlideViewComponent from '../components/SlideViewComponent'
import getFullInfoAboutOnePostComponent from '../components/GetFullInfoAboutOnePostComponent';

// USER SCREEN
import userComponent from '../components/user/userComponent';
import information from '../components/user/profile';
import project from '../components/user/project';
import process from '../components/user/progress';

// SEARCH SCREEN
import searchComponent from '../components/search/searchComponent';
import searchUser from '../components/search/searchUser';
import searchProduct from '../components/search/searchProduct';

// MESSAGE
import Chat from '../components/message/chat';
import OnlineFriend from '../components/message/onlineFriend';

// MY ACCOUNT
import myAccountComponent from '../components/myAccount/myAccountComponent';

//SETTING
import setting from '../components/myAccount/setting';
import aboutUs from '../components/myAccount/aboutUs';
import changePassword from '../components/myAccount/changePassword';
import updateInformation from '../components/myAccount/updateInformation';
import feedback from '../components/myAccount/feedback';
import contactUs from '../components/myAccount/contactUs';
import courseComponent from '../components/CourseComponent';

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
            backgroundColor: color.navTabBar,
            borderBottomWidth: 0,
            height: 60,
        },
        headerLeft: (<Icon name="materialCommunity|menu"
                           color={color.icon}
                           size={size.icon}
                           style={{paddingLeft: 10}}
                           onPress={()=> navigation.navigate('DrawerOpen')}
        />),
        headerRight: (<Icon name="materialCommunity|comment-multiple-outline"
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
                tabBarLabel: 'Dự án',
            }
        },

    },
    {
        initialRouteName: 'SearchUser',
        tabBarPosition: 'top',
        tabBarOptions: {
            activeTintColor: color.darkGray,
            inactiveTintColor: color.icon,
            style: {
                height: 40,
                borderTopWidth: 0,
                borderBottomWidth: 0.5,
                borderColor: color.icon,
                paddingBottom: 20,
                backgroundColor: color.navTitle
            },
            labelStyle: {
                fontWeight: '700',
                fontSize: size.describe,
            },

        }
    }
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
        Process: {
            screen: process,
            navigationOptions: {
                tabBarLabel: 'Tiến độ',
            }
        },
        Project: {
            screen: project,
            navigationOptions: {
                tabBarLabel: 'Dự án',
            }
        },
        Information: {
            screen: information,
            navigationOptions: {
                tabBarLabel: 'Thông tin',
            }
        },

    },
    {
        initialRouteName: 'Project',
        tabBarPosition: 'top',
        tabBarOptions: {
            activeTintColor: color.darkGray,
            inactiveTintColor: color.icon,
            style: {
                height: 70,
                borderTopWidth: 0,
                paddingBottom: 20,
                backgroundColor: color.navTitle
            },
            labelStyle: {
                fontWeight: '700',
                fontSize: size.describe,
            },

        }
    }
);

export const NewFeedStackNavigator = StackNavigator(
    {
        NewFeedStack: {
            screen: newFeedComponent,
            navigationOptions:{
                title: 'colorME',
                headerTintColor: color.navTitle,
            },
        },
        UserStack: {
            screen: userComponent,
            navigationOptions: {
                header: null,
            },
        },
        PostStack: {
            screen: getFullInfoAboutOnePostComponent,
            navigationOptions: {
                header: null,
                tabBarVisible: false,
            },
        },
        CourseStack: {
            screen: courseComponent,
            navigationOptions: {
                header: null,
                tabBarVisible: false,
            },
        },
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
                        name="materialCommunity|bell" size={size.icon}
                        color={tintColor}
                    />
                ),
            }
        },

        Achievement: {
            screen: AchievementsComponent,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="materialCommunity|seal" size={size.icon}
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
                        name="ion|ios-home" size={25}
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
                        name="ion|ios-search" size={size.icon}
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
                        name="fontawesome|user-circle" size={size.icon}
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