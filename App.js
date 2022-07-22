import React from 'react';
import StackNavigator from './components/Navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
    return (
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
    );
};



export default App;