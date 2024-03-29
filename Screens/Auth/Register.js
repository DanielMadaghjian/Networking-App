import { Text, StyleSheet, View, TextInput, ScrollView, TouchableOpacity, Dimensions, ImageBackground } from "react-native"
import { Entypo } from "react-native-vector-icons/Entypo"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useContext, useState } from "react"
import backgroundImage from '../../assets/images/backgroundImage.jpg'
import colors from "../../assets/colors/colors"
import linkedinAutoFill from "../../authLogic/linkedinAutoFill"
import { AuthContext } from "../../authLogic/AuthProvider"

const height = Dimensions.get('window').height;

const Register = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPass, setConfirmedPassword] = useState('');

    const { signUp } = useContext(AuthContext);
    // const { linkedinAutoFill } = useContext(AuthContext);

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <ImageBackground source={backgroundImage} style={styles.imageBackground} >
                <View style={styles.brandView}>
                    <Text style={styles.brandViewText}>Click & Connect</Text>
                </View>
            </ImageBackground>
            <View style={styles.bottomView}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>Go Back</Text>
                </TouchableOpacity>
                <View style={styles.headerWrapper}>
                    <Text style={styles.createAccountText}>Create Account</Text>
                </View>
                <View style={styles.formWrapper}>
                    <FontAwesome.Button style={styles.socialCard} name={'linkedin'} backgroundColor={colors.linkedin} onPress={() => { 
                        // linkedinAutoFill(setFirstName,setLastName,setEmail,setOccupation)
                     }}>
                        Autofill using Linkedin
                    </FontAwesome.Button>
                    <View style={styles.nameWrapper}>
                        <TextInput
                            placeholder="First name"
                            value={firstName}
                            style={styles.nameInputStyle}
                            onChangeText={text => setFirstName(text)}
                        />
                        <TextInput
                            placeholder="Last name"
                            value={lastName}
                            style={styles.nameInputStyle}
                            onChangeText={text => setLastName(text)}
                        />
                    </View>
                    {/* Should be a dropdown */}
                    <TextInput
                        placeholder="Occupation"
                        value={occupation}
                        style={styles.inputStyle}
                        onChangeText={text => setOccupation(text)}
                    />
                    <TextInput
                        placeholder="Email"
                        value={email}
                        style={styles.inputStyle}
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Password"
                        value={password}
                        style={styles.inputStyle}
                        onChangeText={text => setPassword(text)}
                    />
                    {/* Error Handling */}
                    <TextInput
                        secureTextEntry={true}
                        placeholder="Confirm password"
                        style={styles.inputStyle}
                        onChangeText={text => setConfirmedPassword(text)}
                    />
                    <TouchableOpacity
                        style={styles.buttonWrapper}
                        onPress={() => {
                            if (confirmedPass === password) {
                                const user = {
                                    'firstName': firstName,
                                    'lastName': lastName,
                                    'email': email,
                                    'occupation': occupation,
                                    'password': password
                                }
                                signUp(user, navigation);

                            }
                            else {
                                alert('Passwords do not match')
                            }

                        }}>
                        <Text style={styles.buttonText}>Register!!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    inputStyle: {
        marginTop: 30,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: colors.lightBlue,
    },
    nameInputStyle: {
        marginTop: 30,
        width: 140,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: colors.lightBlue,
    },
    formWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    nameWrapper: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonWrapper: {
        marginHorizontal: 20,
        marginTop: 30,
        backgroundColor: colors.darkBlue,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white,
        marginHorizontal: 6,
    },
    imageBackground: {
        height: height * 0.2,
    },
    brandView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandViewText: {
        color: colors.white,
        fontSize: 40,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    headerWrapper: {
        height: height * 0.1,
        alignItems: 'center',
    },
    createAccountText: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'capitalise',
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: colors.white,
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
        marginTop: 20,
    },
    backText: {
        textAlign: "screenLeft",
        marginLeft: 20,
        color: 'red',
        marginTop: 40,
    },
    socialCard: {
        textTransform: 'capitalize',
        width: 300,
        marginBottom: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
})
export default Register