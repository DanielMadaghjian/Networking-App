import { View } from 'react-native';
const linkedinAutoFill = props => {
    const [email, setEmail] = useState();
    const [payload, setPayload] = useState();
    var modal;
    const getUser = async data => {
       
    }
    
    const getUserEmailId = async data => {
       
    };
    const handleGetUser = () => {
    
    }
    return (
        <View>
            {/* <LinkedInModal
                ref={ref => {
                    modal = ref;
                }}
                renderButton={_handleLinkedInLogin}
                style={{ border: '1 solid', fontSize: 20 }}
                clientID='7890txxbrb60g4'
                clientSecret='hqHEXhskhHykjakt'
                redirectUri=''
                onSuccess={token => {
                    getUser(token);
                    getUserEmailId(token);
                }}
                onError={() => {
                    console.log('Error');
                }}
            /> */}
        </View>
    );
}

export default linkedinAutoFill