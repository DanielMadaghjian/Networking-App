import React, { createContext, useReducer, useEffect, useMemo, useState } from 'react';
import { Auth } from 'aws-amplify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null
    }
  );


  // TO USE WITH BACKEND
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      Auth.currentSession().then(res => {
        userToken = res.getAccessToken()
        console.log(`myAccessToken: ${JSON.stringify(userToken)}`)
        dispatch({ type: 'RESTORE_TOKEN', token: userToken });
      }).catch((e) => {
        dispatch({ type: 'RESTORE_TOKEN', token: null });
      })
      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      
    };

    bootstrapAsync();
  }, []);

  useEffect(() => {
    console.log(state)
  }, [state])

  const authContext = useMemo(
    () => ({
      signIn: async (user, navigation) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        await Auth.signIn(user.email, user.password)
          .then((details) => {
            alert('signed in !')
            console.log(details)
            navigation.navigate('Home')
          })
          .catch((e) => {
            if (e.code === 'UserNotConfirmedException') {
              console.log('User not confirmed');
              navigation.navigate('Confirmation', {
                email: email,
                login: true
              })
            }
            else alert(e)
          })

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => {
        Auth.signOut()
        dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async (user) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        if (validateAttributes(user) && (validateEmail(user.email) && validatePassword(user.password))) {
          await Auth.signUp({
            username: user.email,
            password: user.password,
            attributes: {
              email: user.email,
            }

          })
            .then(() => {
              navigation.navigate('Confirmation',
                {
                  email: user.email,
                  login: false
                })
            }
            )
            .catch(e => {
              if (e['code'] === "UsernameExistsException") {
                alert('There is already an account registered with this email')
              }
            }
            )
        }
      },
      isLoggedIn: state.userToken ? true : false
    }),
    [state]
  );
  return (
    <AuthContext.Provider value={authContext}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider