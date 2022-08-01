import { Header } from "aws-amplify-react-native/dist/AmplifyUI";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native"
import { TextInput } from "react-native-gesture-handler/lib/commonjs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from "../../assets/colors/colors";
const Confirmation = () => {
    const [code, setCode] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <MaterialCommunityIcons name="email-check" size={120} ></MaterialCommunityIcons>
                <Header>Confirm Your Email Address</Header>
                <Text>A code was sent to EMAIL please enter it below to confirm your email address</Text>
                <TextInput
                    placeholder="Code"
                    value={code}
                    style={styles.codeInputStyle}
                    onChangeText={text => setCode(text)}
                />
                <Text> Resend Code?</Text>
            </View>
        </ View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        flex: 1,
        backgroundColor: colors.white,
        textAlign: 'center'
    },
    codeInputStyle: {
        marginTop: 50,
        width: 300,
        height: 100,
        borderColor: 'black',
        textAlign: 'center',
        marginLeft: 45
    },
    headerWrapper: {

    }
})
export default Confirmation