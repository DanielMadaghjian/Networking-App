import { Auth } from 'aws-amplify';

async function isAuthenticated() {
    try {
        await Auth.currentUserInfo();
        return true;
    } catch {
        return false;
    }
}

export default isAuthenticated