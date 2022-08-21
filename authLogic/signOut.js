import { Auth } from "aws-amplify"

const signOut = async () => {
    Auth.signOut()
    .then(
        alert('signed out')
    )
}

export default signOut