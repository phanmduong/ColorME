import * as types from '../constants/actionTypes';
import {Start} from '../navigators/appRouter'
import {NavigationActions} from 'react-native'

const RouterState = Start.router.getStateForAction(Start.router.getActionForPathAndParams('Login'));
export default function openMainAppReducer(state = RouterState, action ) {
    let nextState;

    switch (action.type){
        case types.LOGIN:
            nextState = Start.router.getStateForAction(
                NavigationActions.reset({
                    index : 0,
                    key : null,
                    actions: [
                        NavigationActions.navigate({routeName: 'Main'})
                    ]
                }),
                state
            );
            break;
        default:
            nextState = Start.router.getStateForAction(action, state);
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;;
}