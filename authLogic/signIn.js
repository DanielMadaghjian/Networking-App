import { Auth } from "aws-amplify"
const signIn = async (email, password, navigation,login) => {
    await Auth.signIn(email, password)
        .then((user) => {
            alert('signed in !')
            login(user)
            console.log(user)
            // navigation.navigate('Home')
        })
        .catch((e) => {
            if(e.code === 'UserNotConfirmedException')
            {
                console.log('User not confirmed');
                navigation.navigate('Confirmation',{
                    email: email,
                    login: true
                })
            }
            else alert(e)
        })
}
export default signIn