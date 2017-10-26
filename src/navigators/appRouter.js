import React from 'react';
import {
    DrawerItems, TouchableOpacity
} from 'react-native';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import Icon from '../commons/Icon';
import * as color from '../styles/color';
import * as size from '../styles/size';

// LOGIN
import LoginContainer from '../components/loginRegister/LoginContainer';
import EmailIdentityContainer from '../components/loginRegister/EmailIdentityContainer'
import ResetPasswordContainer from '../components/loginRegister/ResetPasswordContainer'
import RegisterContainer from '../components/loginRegister/RegisterContainer'
import CodeIdentityContainer from '../components/loginRegister/CodeIdentityContainer'

// MAIN SCREEN
import NewFeedContainer from '../components/newFeed/NewFeedContainer';
import notificationComponent from '../components/NotificationContainer';
import AchievementsComponent from '../components/AchievementsContainer';
import SlideViewComponent from '../components/SlideViewContainer'
import InfoAboutPostContainer from '../components/InfoAboutPostContainer';

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
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Icon
                    name="materialCommunity|menu"
                    color={color.navTitle}
                    size={size.icon}
                    style={{paddingLeft: 15}}
                />
            </TouchableOpacity>
        ),
        // headerRight: (
        //     <TouchableOpacity onPress={() => navigation.navigate('')}>
        //         <Icon name="entypo|chat"
        //               color={color.navTitle}
        //               size={size.icon}
        //               style={{paddingRight: 10}}
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
        NewFeedStack: {screen: NewFeedContainer, navigationOptions: {title: 'colorME', headerTintColor: color.navTitle,},},
        PostLiker: {screen: PostLikerInModal, StackNavigatorStyle},
        UserInNewFeed: {screen: UserInNewFeed, StackNavigatorStyle},
        ThePostInNewFeed: {screen: ThePostInNewFeed, navigationOptions: {tabBarVisible: false,}},
    },
    HomeStackStyle
);

const NotificationStackNavigator = StackNavigator(
    {
        NotificationStack: {screen: notificationComponent}
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

const Home = TabNavigator(
    {
        // Notification: {
        //     screen: NotificationStackNavigator,
        //     navigationOptions: {
        //         tabBarIcon: ({tintColor}) => (
        //             <Icon
        //                 name="materialCommunity|bell" size={size.icon}
        //                 color={tintColor}
        //             />
        //         ),
        //     }
        // },
        //
        // Achievement: {
        //     screen: AchievementsComponent,
        //     navigationOptions: {
        //         tabBarIcon: ({tintColor}) => (
        //             <Icon
        //                 name="materialCommunity|seal" size={size.icon}
        //                 color={tintColor}
        //             />
        //         ),
        //     }
        // },
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

const Drawer = DrawerNavigator(
    {
        Home: {screen: Home}
    },
    {
        drawerWidth: size.wid * 3 / 4,
        drawerPosition: 'left',
        contentComponent: props => <SlideViewComponent {...props} />
    }
);

const Main = StackNavigator(
    {
        Drawer: {screen: Drawer}
    }, {headerMode: 'none'}
);
const Login = StackNavigator({
        LoginContainer: {screen: LoginContainer,},
        RegisterContainer: {screen: RegisterContainer,},
        ResetPasswordContainer: {screen: ResetPasswordContainer,},
        EmailIdentityContainer: {screen: EmailIdentityContainer,},
        CodeIdentityContainer: {screen: CodeIdentityContainer,}
    }, StackNavigatorStyle
);

const Start = StackNavigator(
    {
        Login: {screen: Login,},
        Main: {screen: Main,}
    }, StackNavigatorStyle
);

export default Start;