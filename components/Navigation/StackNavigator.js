import TabNavigator from './TabNavigator';
import EventDetails from '../../Screens/EventDetails'

import Login from '../../Screens/Auth/Login';
import Register from '../../Screens/Auth/Register';
import {createStackNavigator} from '@react-navigation/stack';
import EditProfile from '../../Screens/EditProfile';
import Settings from '../../Screens/Settings';
import About from '../../Screens/About';
import PrivacyPolicy from '../../Screens/PrivacyPolicy';
import Help from '../../Screens/Help';
import UserEventsAttended from '../../Screens/UserEventsAttended';
import UserEventsPosted from '../../Screens/UserEventsPosted';


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
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false, }}
        />
         <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false, }}
        />
        <Stack.Screen
            name="About"
            component={About}
            options={{ headerShown: false, }}
        />
         <Stack.Screen
            name="PrivacyPolicy"
            component={PrivacyPolicy}
            options={{ headerShown: false, }}
        />
        <Stack.Screen
            name="Help"
            component={Help}
            options={{ headerShown: false, }}
        />
        <Stack.Screen
            name="UserEventsAttended"
            component={UserEventsAttended}
            options={{ headerShown: false, }}
        />
        <Stack.Screen
            name="UserEventsPosted"
            component={UserEventsPosted}
            options={{ headerShown: false, }}
        />
    </Stack.Navigator>
)

export default StackNavigator