import React from 'react';
import {
    DrawerItems, TouchableOpacity
} from 'react-native';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import Icon from '../commons/Icon';
import * as color from '../styles/color';
import * as size from '../styles/size';

// LOGIN
import LoginComponent from '../components/loginRegister/LoginContainer';
import EmailIdentityComponent from '../components/loginRegister/EmailIdentityContainer'
import ResetPasswordComponent from '../components/loginRegister/ResetPasswordContainer'
import RegisterComponent from '../components/loginRegister/RegisterContainer'
import CodeIdentityComponent from '../components/loginRegister/CodeIdentityContainer'

// MAIN SCREEN
import newFeedComponent from '../components/newFeed/NewFeedContainer';
import messageComponent from '../components/message/MessageContainer';
import notificationComponent from '../components/NotificationContainer';
import AchievementsComponent from '../components/AchievementsContainer';
import SlideViewComponent from '../components/SlideViewContainer'
import getFullInfoAboutOnePostComponent from '../components/InfoAboutPostContainer';
import { Root } from "native-base";

// USER SCREEN
import userComponent from '../components/user/userComponent';
import information from '../components/user/profile';
import project from '../components/user/project';
import process from '../components/user/progress';

// SEARCH SCREEN
import searchComponent from '../components/search/SearchContainer';
import searchUser from '../components/search/SearchUser';
import searchProduct from '../components/search/SearchProduct';

// MESSAGE
import Chat from '../components/message/Chat';
import OnlineFriend from '../components/message/OnlineFriend';

// MY ACCOUNT
import myAccountComponent from '../components/myAccount/myAccountComponent';

//GROUP
import groupComponent from '../components/group/GroupContainer';
import topics from '../components/group/Topics';
import groupProject from '../components/group/GroupProject';
import members from '../components/group/Members';


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
            borderTopWidth: 0.5,
        },
        showLabel: false,
    }
};
export const TabNavigatorTopOption = {
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
            backgroundColor: color.main,
            borderBottomWidth: 0,
            height: 60,
        },
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Icon
                    name="materialCommunity|menu"
                    color={color.navTitle}
                    size={size.icon}
                    style={{paddingLeft: 10}}
                />
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Icon name="entypo|chat"
                      color={color.navTitle}
                      size={size.icon}
                      style={{paddingRight: 10}}
                />
            </TouchableOpacity>
        ),
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
        tabBarOptions: TabNavigatorTopOption
    }
);

export const Group = TabNavigator(
    {
        Topics: {
            screen: topics,
            navigationOptions: {
                tabBarLabel: 'Chủ đề',
            }
        },
        GroupProject: {
            screen: groupProject,
            navigationOptions: {
                tabBarLabel: 'Dự án',
            }
        },
        Members: {
            screen: members,
            navigationOptions: {
                tabBarLabel: 'Thành viên',
            }
        },

    },
    {
        initialRouteName: 'GroupProject',
        tabBarPosition: 'top',
        tabBarOptions: TabNavigatorTopOption
    }
);
export const ThePostInNewFeed = StackNavigator(
    {
        ThePostInNewFeed: {
            screen: getFullInfoAboutOnePostComponent,
            navigationOptions: {
                header: null,
                tabBarVisible: false,
            },
        },
        GroupStack: {
            screen: groupComponent,
            navigationOptions: {
                header: null,
            },
        },
    }, StackNavigatorStyle
);

export const UserInNewFeed = StackNavigator(
    {

        UserInNewFeed: {
            screen: userComponent,
            navigationOptions: {
                header: null,
            }
        },
    }, HomeStackStyle
);

export const NewFeedStackNavigator = StackNavigator(
    {
        NewFeedStack: {
            screen: newFeedComponent,
            navigationOptions: {
                title: 'colorME',
                headerTintColor: color.navTitle,
            },
        },
        UserInNewFeed: {
            screen: UserInNewFeed,
            navigationOptions: {
                header: null,
            },
        },
        ThePostInNewFeed: {
            screen: ThePostInNewFeed,
            navigationOptions: {
                header: null,
                tabBarVisible: false,
            },
        },
    },
    HomeStackStyle
);

export const NotificationStackNavigator = StackNavigator(
    {
        NotificationStack: {
            screen: notificationComponent,
            navigationOptions: {
                title: 'Thông báo',
            }
        }
    }, StackNavigatorStyle
);

export const RouterToSearchUser = StackNavigator(
    {
        SearchUser: {
            screen: searchUser,
        },
        UserInSearch: {
            screen: userComponent,
        },
    }, StackNavigatorStyle
);

export const SearchStackNavigator = StackNavigator(
    {
        SearchStack: {
            screen: searchComponent,
        },
    }, StackNavigatorStyle
);




export const MessageStackNavigator = StackNavigator(
    {
        MessageStack: {
            screen: messageComponent,
            navigationOptions: {
                title: 'Tin nhắn',
            }
        }
    }, StackNavigatorStyle
);

export const MyAccountStackNavigator = StackNavigator(
    {
        MyAccountStack: {
            screen: myAccountComponent,
            navigationOptions: {
                title: 'Tài khoản',
            }
        }
    }, StackNavigatorStyle
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
        drawerWidth: size.wid * 3 / 4,
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
export const Login = StackNavigator({
    LoginComponent: {
        screen: LoginComponent,
        navigationOptions: {
            header: null
        }
    },
    RegisterComponent: {
        screen: RegisterComponent,
        navigationOptions: {
            header: null
        }
    },
    ResetPasswordComponent: {
        screen: ResetPasswordComponent,
        navigationOptions: {
            header: null,
        }
    },
    EmailIdentityComponent: {
        screen: EmailIdentityComponent,
        navigationOptions: {
            header: null,
        }
    },
    CodeIdentityComponent: {
        screen: CodeIdentityComponent,
        navigationOptions: {
            header: null,
        }
    }
})

export const Start = StackNavigator(
    {
        Login: {
            screen: Login,
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

export default Start;