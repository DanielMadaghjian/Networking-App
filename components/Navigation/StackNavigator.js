import TabNavigator from './TabNavigator';
import EventDetails from '../../Screens/EventDetails'

import Login from '../../Screens/Auth/Login';
import Register from '../../Screens/Auth/Register';
import {createStackNavigator} from '@react-navigation/stack';
import Confirmation from '../../Screens/Auth/Confirmation';

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}

        ></Stack.Screen>

        <Stack.Screen
            name="EventDetails"
            component={EventDetails}
            options={{ title: 'Event Details' }}
        />
        <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false, }}
        />
        <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false, }}
        />
        <Stack.Screen
            name="Confirmation"
            component={Confirmation}
            options={{ headerShown: false, }}
        />

    </Stack.Navigator>
)

export default StackNavigator