import { Auth } from "aws-amplify";
import { Header } from "aws-amplify-react-native/dist/AmplifyUI";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler/lib/commonjs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from "../../assets/colors/colors";
import confirmUser from "../../authLogic/confirmUser";
const Confirmation = ({ navigation, route }) => {
    const [code, setCode] = useState('')
    const email = route.params.email;
    const login = route.params.login;
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <MaterialCommunityIcons name="email-check" size={300} color={colors.darkBlue} ></MaterialCommunityIcons>
                <Header>Confirm Your Email Address</Header>
                <Text>A code was sent to {email} please enter it below to confirm your email address</Text>
                <TextInput
                    placeholder="Code"
                    value={code}
                    style={styles.codeInputStyle}
                    keyboardType='numeric'
                    onChangeText={text => setCode(text)}
                />
                <TouchableOpacity
                    onPress={() => {
                        Auth.resendSignUp(email)
                    }}
                >
                    <Text style={styles.resendText}>Resend Code?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonWrapper}
                    onPress={() => {
                        confirmUser(email, code, navigation)
                    }}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}>
                    <Text style={styles.changeEmailText}>{login ? 'Go Back ':'Change Email'}</Text>
                </TouchableOpacity>
            </View>
        </ View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: colors.white,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    codeInputStyle: {
        marginTop: 20,
        width: 300,
        height: 100,
        borderColor: 'black',
        textAlign: 'center',
        fontSize: 40,
        outline: 'black'
    },
    buttonWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: colors.darkBlue,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
    },
    resendText: {
        marginTop: 20,
        fontSize: 18,
        color: 'red'
    },
    changeEmailText: {
        marginTop: 20,
        fontSize: 18,
        textDecorationLine: 'underline'
    },
    buttonText: {
        fontSize: 18,
        color: colors.white,
        marginHorizontal: 20,
    },
    headerWrapper: {

    }
})
export default Confirmation