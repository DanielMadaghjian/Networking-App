import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Home from './Screens/Home';
import EventDetails from './components/EventDetails';
import PostEvent from './components/PostEvent';
import Profile from './components/Profile';
import Login from './Auth/Login';
import Register from './Auth/Register';


import colors from './assets/colors/colors';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//https://oblador.github.io/react-native-vector-icons/
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();
MaterialIcons.loadFont();
Ionicons.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
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
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PostEvent"
        component={PostEvent}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="create-sharp" size={32} color={color} />
          ),
          title: 'Post Event'
        }}        
      />
      <Tab.Screen
        name="Profile"
        component={Profile}  
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" size={32} color={color} />
          ),
        }}     
      />
       
    </Tab.Navigator>
  );
};


const App = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{headerShown: false}}
              
            ></Stack.Screen>
            
            <Stack.Screen
              name="EventDetails"
              component={EventDetails}
              options={{ title: 'Event Details' }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false, }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{headerShown: false, }}
            />
            
         </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  
 
});

export default App;