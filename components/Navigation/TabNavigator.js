import Home from '../../Screens/Home'
import PostEvent from '../../Screens/PostEvent';
import Profile from '../../Screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

//https://oblador.github.io/react-native-vector-icons/
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/colors';
import Restricted from '../../Screens/Auth/Restricted';
import { useContext } from 'react';
import { AuthContext } from '../../authLogic/AuthProvider';



Entypo.loadFont();
MaterialCommunityIcons.loadFont();
MaterialIcons.loadFont();
Ionicons.loadFont();

const Tab = createBottomTabNavigator();



const TabNavigator = () => {

  const { isLoggedIn } = useContext(AuthContext)
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: colors.darkBlue,
        inactiveTintColor: colors.lightGrey,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PostEvent"
        component={isLoggedIn ? PostEvent : Restricted}// Or restricted
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="create-sharp" size={32} color={color} />
          ),
          title: 'Post Event'
        }}
      />
      <Tab.Screen
        name="Profile"
        component={isLoggedIn ? Profile : Restricted}// Or restricted 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={32} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },


});

export default TabNavigator;
