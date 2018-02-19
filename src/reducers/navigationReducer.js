import {NavigationActions} from 'react-navigation';
import * as types from '../constants/actionTypes';

import {Start} from '../navigators/appRouter';

const initialState = Start.router.getStateForAction(Start.router.getActionForPathAndParams('Login'));

// const initialState = Start.router.getStateForAction(NavigationActions.init());

export default function navigatorReducer(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case types.LOGIN:
            nextState = Start.router.getStateForAction(
                resetAction,
                state
            );
            break;
        case types.LOGOUT:
            nextState = Start.router.getStateForAction(
                resetAction,
                state
            );
        case "Navigation/BACK":
            let stateData = {
                ...state,
                ...{currentScreen: action.routeName}
            };
            nextState = Start.router.getStateForAction(action, stateData);
            return nextState;
        case "Navigation/NAVIGATE":
            // Check can open 2 same screen
            if (action.routeName === "DrawerOpen" || action.routeName === "DrawerClose") {
                nextState = Start.router.getStateForAction(action, state);
                return nextState;
            }
            if (action.routeName !== state.currentScreen) {
                let stateData = {
                    ...state,
                    ...{currentScreen: action.routeName}
                };
                nextState = Start.router.getStateForAction(action, stateData);
                return nextState;
            }

            return nextState;
        default:
            nextState = Start.router.getStateForAction(action, state);
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

const resetAction = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [
        NavigationActions.navigate({routeName: 'Main'})
    ]
});

const resetLogout = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [
        NavigationActions.navigate({routeName: 'Login'})
    ]
})
