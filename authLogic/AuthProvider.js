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

  };
  useEffect(() => {  
    bootstrapAsync();
  }, []);

  useEffect(() => {
    console.log(state)
  }, [state])

  const authContext = useMemo(
    () => ({
      signIn: async (user, navigation) => {
        await Auth.signIn(user.email, user.password)
          .then((details) => {
            alert('signed in !')
            console.log(details)
            navigation.navigate('Home')
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            bootstrapAsync()
          })
          .catch((e) => {
            if (e.code === 'UserNotConfirmedException') {
              console.log('User not confirmed');
              navigation.navigate('Confirmation', {
                user: user,
                login: true
              })
            }
            else alert(e)
          })

      },
      signOut: () => {
        Auth.signOut()
        dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async (user, navigation) => {
        const validateAttributes = (user) => {
          if (user.email.trim() === '' || user.password.trim() === '' || user.firstName.trim() === '' || user.lastName.trim() === '' || user.occupation.trim() === '') {
            alert('Please fill all fields')
            return false
          }
          return true
        }

        const validatePassword = (password) => {
          var alertString = 'Password should contain: \n';
          //has atleast 1 number
          if (!(/\d/.test(password))) alertString = alertString.concat('At least 1 number \n');
          if (!(/[A-Z]/.test(password))) alertString = alertString.concat('At least 1 uppercase letter \n');
          if (!(/[a-z]/.test(password))) alertString = alertString.concat('At least 1 lowercase letter \n');
          if (!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password))) alertString = alertString.concat('At least 1 special character \n')
          if (password.length < 8) alertString = alertString.concat('At least 8 characters \n');
          if (!(alertString === 'Password should contain: \n')) {
            alert(alertString);
            return false;
          }
          return true;
        }

        const validateEmail = (email) => {
          var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

          if (email.match(validRegex)) {
            return true;
          }
          alert('Please enter a valid email')
          return false;
        }

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
      confirmUser: async (email, code,navigation) => {
        Auth.confirmSignUp(email,code)
        .then(() => {
            alert('You have successfully verified your account')
            navigation.navigate('Login')
        })
        .catch(e => {
            if (e['code'] === "CodeMismatchException") {
                alert('This code is incorrect');
            }
            if (e['code'] === "ExpiredCodeException") {
                alert('This code has expired');
            }
            
        })
      },
      isLoggedIn: state.userToken ? true : false,
      userOrganisation: true
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