import { StackNavigator } from 'react-navigation'

 import ForgotPasswordContainer from '../containers/ForgotPasswordContainer';
 import RegisterContainer from '../containers/RegisterContainer';

import LoginComponent from '../components/LoginComponent';
import RegisterComponent from "../components/RegisterComponent";
import ForgotPasswordComponent from "../components/ForgotPasswordComponent";




export const Stack = StackNavigator({
    LoginScreen: {
        screen: LoginComponent ,
        navigationOptions:{
            header: null,
        }
    },
    RegisterScreen: {
        screen: RegisterComponent,
        navigationOptions:{
            header: null,
        }
    },
    ForgotPasswordScreen: {
        screen: ForgotPasswordComponent,
        navigationOptions: {
            header: null,
        }
    }
});