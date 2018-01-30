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
import CurriculumContainer from '../components/course/CurriculumContainer';
import CurriculumListContainer from '../components/course/CurriculumListContainer';
import CurriculumInformationContainer from '../components/course/CurriculumInformationContainer';
import CourseContainer from '../components/course/CourseContainer';
import LearnRegisterContainer from '../components/course/LearnRegisterContainer';
import CourseInformation from '../components/course/CourseInformationContainer';
import AttendGroupContainer from '../components/drawer/AttendGroupContainer';
import InfoAboutPostContainer from '../components/newFeed/InfoAboutPostContainer';

// USER SCREEN
import UserContainer from '../components/user/UserContainer';

// SEARCH SCREEN
import SearchContainer from '../components/search/SearchContainer';

// MY ACCOUNT
import MyAccountContainer from '../components/myAccount/MyAccountContainer';

//GROUP
import GroupContainer from '../components/group/GroupContainer';

import PostLiker from '../components/newFeed/PostLiker';

// FEEDBACK
import FeedbackAppContainer from '../components/drawer/FeedbackContainer'
import TopicContainer from "../components/group/TopicContainer";

export const TabNavigatorBottomStyle = {
    indicatorStyle: {
        border: 5,
        backgroundColor: color.none,
    },
    initialRouteName: 'NewFeed',
    tabBarPosition: 'bottom',
    tabBarOptions: {
        indicatorStyle: {backgroundColor: 'transparent'},
        showIcon: true,
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

const ThePostInNewFeed = StackNavigator(
    {
        ThePostInNewFeed: {screen: InfoAboutPostContainer, navigationOptions: {tabBarVisible: false}},
        GroupStack: {screen: GroupContainer},
    }, StackNavigatorStyle
);

const UserInNewFeed = StackNavigator(
    {
        UserInNewFeed: {screen: UserContainer},
        GroupInUser: {screen: GroupContainer},
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
        TopicInNotification: {screen: TopicContainer},
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
const Curriculum = StackNavigator(
    {
        Curriculum: {screen: CurriculumContainer},
        CurriculumList: {screen: CurriculumListContainer},
        CurriculumInformation: {screen: CurriculumInformationContainer},
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
                        name="fontawesome|bandcamp" size={size.iconGiant}
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

const GroupUser = StackNavigator(
    {
        GroupInDrawer: {screen: GroupContainer},
        UserInGroup: {screen: UserContainer},
        Topic: {screen: TopicContainer},
        ThePostInGroup: {screen: InfoAboutPostContainer, navigationOptions: {tabBarVisible: false}},
    }, StackNavigatorStyle
);

const Group = StackNavigator(
    {
        AttendGroup: {screen: AttendGroupContainer},
        GroupInDrawer: {screen: GroupUser},
    }, StackNavigatorStyle
);


const Drawer = DrawerNavigator(
    {
        Home: {screen: Home},
        // CurriculumInDrawer: {screen: Curriculum},
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
        AttendGroup: {screen: Group},
        Rules: {screen: RulesContainer},
        FeedbackAppContainer: {screen: FeedbackAppContainer},
        Main: {screen: Main,}
    }, StackNavigatorStyle
);
