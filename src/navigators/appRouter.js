import React, {Component} from 'react';
import {
    DrawerItems, TouchableOpacity, StatusBar, View
} from 'react-native';
import {TabNavigator, StackNavigator, DrawerNavigator, addNavigationHelpers} from 'react-navigation';
import Icon from '../commons/Icon';
import * as color from '../styles/color';
import * as size from '../styles/size';
// LOGIN
import LoginContainer from '../components/loginRegister/LoginContainer';
import EmailIdentityContainer from '../components/loginRegister/EmailIdentityContainer'
import ResetPasswordContainer from '../components/loginRegister/ResetPasswordContainer'
import RulesContainer from '../components/loginRegister/RulesContainer'
import RegisterContainer from '../components/loginRegister/RegisterContainer'
import CodeIdentityContainer from '../components/loginRegister/CodeIdentityContainer'

// MAIN SCREEN
import NewFeedContainer from '../components/newFeed/NewFeedContainer';
import NotificationContainer from '../components/NotificationContainer';
import SlideViewComponent from '../components/drawer/SlideViewContainer'
import CourseContainer from '../components/drawer/CourseContainer'
import LearnRegisterContainer from '../components/drawer/LearnRegisterContainer'
import CourseInformation from '../components/drawer/CourseInformationContainer'
import AttendGroupContainer from '../components/drawer/AttendGroupContainer'
import InfoAboutPostContainer from '../components/newFeed/InfoAboutPostContainer';
import AchievementsContainer from '../components/AchievementsContainer';

// USER SCREEN
import UserContainer from '../components/user/UserContainer';

// SEARCH SCREEN
import SearchContainer from '../components/search/SearchContainer';

// MY ACCOUNT
import MyAccountContainer from '../components/myAccount/MyAccountContainer';

//GROUP
import GroupContainer from '../components/group/GroupContainer';

import PostLiker from '../components/newFeed/PostLiker';


export const TabNavigatorBottomStyle = {
    initialRouteName: 'NewFeed',
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: color.darkGray,
        inactiveTintColor: color.icon,
        style: {
            backgroundColor: color.navTitle,
        },
        showLabel: false,
    }
};

const StackNavigatorStyle = {
    navigationOptions: {
        header: null,
    },
};

const HomeStackStyle = {
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: color.main,
            borderBottomWidth: 0,
            height: 60,
        },
        headerTitleStyle: {
            fontFamily: 'Segoe UI',
            color: color.navTitle,
        },
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Icon
                    name="materialCommunity|menu"
                    color={color.darkGray}
                    size={size.iconGiant}
                    style={{paddingLeft: 15, paddingRight: 15}}
                />
            </TouchableOpacity>
        ),
        // headerLeft: (
        //     <TouchableOpacity onPress={() => navigation.navigate('')}>
        //         <Icon name="entypo|chat"
        //               color={color.navTitle}
        //               size={size.iconGiant}
        //               style={{paddingLeft: 15, paddingRight: 15}}
        //
        //         />
        //     </TouchableOpacity>
        // ),
    }),
};

const ThePostInNewFeed = StackNavigator(
    {
        ThePostInNewFeed: {screen: InfoAboutPostContainer, navigationOptions: {tabBarVisible: false}},
        GroupStack: {screen: GroupContainer},
    }, StackNavigatorStyle
);

const UserInNewFeed = StackNavigator(
    {
        UserInNewFeed: {screen: UserContainer},
    }, StackNavigatorStyle
);

const PostLikerInModal = StackNavigator(
    {
        UserInNewFeed: {screen: PostLiker},
        UserInPostLiker: {screen: UserContainer},

    }, StackNavigatorStyle
);

const NewFeedStackNavigator = StackNavigator(
    {
        NewFeedStack: {screen: NewFeedContainer, navigationOptions: {title: 'colorME'},},
        PostLiker: {screen: PostLikerInModal, StackNavigatorStyle},
        UserInNewFeed: {screen: UserInNewFeed, StackNavigatorStyle},
        ThePostInNewFeed: {screen: ThePostInNewFeed, navigationOptions: {tabBarVisible: false,}},
    },
    StackNavigatorStyle
);

const NotificationStackNavigator = StackNavigator(
    {
        NotificationStack: {screen: NotificationContainer},
        UserInNotification: {screen: UserContainer},
        ThePostInNotification: {screen: InfoAboutPostContainer, navigationOptions: {tabBarVisible: false}},
    }, StackNavigatorStyle
);

const SearchStackNavigator = StackNavigator(
    {
        SearchStack: {screen: SearchContainer},
        UserInSearch: {screen: UserContainer},
        ThePostInSearch: {screen: InfoAboutPostContainer, navigationOptions: {tabBarVisible: false}},
    }, StackNavigatorStyle
);

const MyAccountStackNavigator = StackNavigator(
    {
        MyAccountStack: {screen: MyAccountContainer}
    }, StackNavigatorStyle
);

const Course = StackNavigator(
    {
        CourseList: {screen: CourseContainer},
        CourseInFormation: {screen: CourseInformation, navigationOptions: {tabBarVisible: false,}},
        LearnRegister: {screen: LearnRegisterContainer, navigationOptions: {tabBarVisible: false,}},
    }, StackNavigatorStyle
);
const Home = TabNavigator(
    {
        Notification: {
            screen: NotificationStackNavigator,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="materialCommunity|bell" size={size.iconGiant}
                        color={tintColor}
                    />
                ),
            }
        },
        Course: {
            screen: Course,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="fontawesome|graduation-cap" size={size.iconGiant}
                        color={tintColor}
                    />
                )
            }
        },
        NewFeed: {
            screen: NewFeedStackNavigator,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="fontawesome|bandcamp" size={25}
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
                        name="ion|ios-search" size={size.iconGiant}
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
                        name="fontawesome|user-circle" size={size.iconGiant}
                        color={tintColor}
                    />
                ),
            }
        },
    },
    TabNavigatorBottomStyle
);

const Group = StackNavigator(
    {
        AttendGroup: {screen: AttendGroupContainer},
        GroupInDrawer: {screen: GroupContainer},
    }, StackNavigatorStyle
);
const Drawer = DrawerNavigator(
    {
        Home: {screen: Home},
        AttendGroup: {screen: Group},
        Rules: {screen: RulesContainer},
    },
    {
        drawerWidth: size.wid * 3 / 4,
        drawerPosition: 'right',
        contentComponent: props => <SlideViewComponent {...props} />
    }
);

const Main = StackNavigator(
    {
        Drawer: {screen: Drawer}
    }, {headerMode: 'none'}
);

export const Start = StackNavigator(
    {
        Login: {screen: LoginContainer},
        RegisterContainer: {screen: RegisterContainer,},
        EmailIdentityContainer: {screen: EmailIdentityContainer,},
        ResetPasswordContainer: {screen: ResetPasswordContainer,},
        CodeIdentityContainer: {screen: CodeIdentityContainer,},
        RulesContainer: {screen: RulesContainer},
        Main: {screen: Main,}
    }, {
        ...StackNavigatorStyle,
        headerMode: 'none'
    }
);
