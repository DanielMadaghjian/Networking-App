import React from 'react';
import StackNavigator from './components/Navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import awsconfig from './aws-exports';
import Amplify from 'aws-amplify';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};



export default App;