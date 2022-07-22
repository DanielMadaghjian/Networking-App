import { SignUp } from 'aws-amplify-react-native/dist/Auth';
import { Auth } from 'aws-amplify';

const signUp = (user) => {
    Auth.signUp({
      username: user.email,
      password: user.password,
      attributes:{
        email: user.email,
      }

    })
    .then(res => {
      alert('signed up')
    })
    .catch(
      alert('err')
    )
  }
export default signUp