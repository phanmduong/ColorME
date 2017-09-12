import { StackNavigator } from 'react-navigation'
// import LoginContainer from '../containers/LoginContainer';
// import ForgotPasswordContainer from '../containers/ForgotPasswordContainer';
// import RegisterContainer from '../containers/RegisterContainer';
import RegisterComponent from '../components/RegisterComponent';
import ForgotPasswordComponent from '../components/ForgotPasswordComponent';
import LoginComponent from '../components/LoginComponent';



export const Stack = StackNavigator({
    LoginScreen: {
        screen: LoginComponent,
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