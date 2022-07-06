import { Text, StyleSheet, View, TextInput, ScrollView } from "react-native"
import colors from "../assets/colors/colors"
const Register = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text>Register</Text>
            <View style={styles.formWrapper}>
                <View style={styles.nameWrapper}>
                    <TextInput placeholder="First name " style={styles.inputStyle} />
                    <TextInput placeholder="Last name" style={styles.inputStyle} />
                </View>
                <TextInput placeholder="Email" style={styles.inputStyle} />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    style={styles.inputStyle}
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Confirm password"
                    style={styles.inputStyle}
                />
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
    formWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameContainer: {
        flexDirection:'row'
    }
})
export default Register