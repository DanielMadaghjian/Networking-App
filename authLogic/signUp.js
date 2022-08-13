
import { Auth } from 'aws-amplify';

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

const signUp = async (user, navigation) => {
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
}
export default signUp