import {AsyncStorage} from 'react-native'
export function logout(){
    return async function(){
        try{
            await AsyncStorage.setItem('@ColorMe:email', '');
            await AsyncStorage.setItem('@ColorMe:password', '');
        }
        catch (error) {
        }
        ;
    }
}