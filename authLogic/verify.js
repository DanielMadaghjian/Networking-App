import { Auth } from 'aws-amplify';
const verify = ({user, authCode}) => {
    Auth.confirmSignUp(user.email, authCode)
    .then(res => {
      alert('confirmed')
    })
    .catch(
      alert('err confirming')
    )
  }

export default verify;