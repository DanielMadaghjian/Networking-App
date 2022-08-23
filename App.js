
import StackNavigator from './components/Navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import awsconfig from './aws-exports';
import Amplify from 'aws-amplify';
import AuthProvider, { AuthContext } from './authLogic/AuthProvider';
import { useContext } from 'react';

Amplify.configure(awsconfig);




const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};



export default App;