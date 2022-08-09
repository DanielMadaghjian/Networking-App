import { Auth } from "aws-amplify"

const confirmUser = (email, code,navigation) => {
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
}
export default confirmUser