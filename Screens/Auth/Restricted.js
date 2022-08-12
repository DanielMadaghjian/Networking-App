
import { StyleSheet, View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler/lib/commonjs"
import colors from "../../assets/colors/colors"
const Restricted = ({ navigation }) => {
    return (
        <View style={{ height: '100%' }}>
            <TouchableOpacity onPress = {() => navigation.goBack()}>
                <Text style={styles.backText} >Go Back</Text>
            </TouchableOpacity>
            <View style={styles.headerWrapper}>
                Login or Register to access this page
            </View>
            <View style={styles.restrictWrapper}>
                <TouchableOpacity onPress = {() => navigation.navigate('Login')}>
                    <View style={styles.button}>
                        Log in
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => navigation.navigate('Register')}>
                    <View style={styles.button}>
                        Register
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        textAlign: 'center',
        marginTop: '4rem',
        fontSize: '2rem'
    },
    restrictWrapper: {
        marginTop: '5rem',
        alignItems: 'center',

    },
    button: {
        flex: 1,
        backgroundColor: colors.darkBlue,
        borderRadius: 10,
        width: '15rem',
        textAlign: 'center',
        fontSize: '3rem',
        marginBottom: '0.5rem',
        color:'white',
    },
    backText: {
        textAlign: "screenLeft",
        marginLeft: '0.1rem',
        color: 'red',
        marginTop: '0.1rem',
        fontSize: '2rem',
    },
})

export default Restricted 