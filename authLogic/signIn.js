import { Auth } from "aws-amplify"
const signIn = async (email, password, navigation) => {
    await Auth.signIn(email, password)
        .then((user) => {
            alert('signed in !')
            console.log(user)
            navigation.navigate('Home')
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