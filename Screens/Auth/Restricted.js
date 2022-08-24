
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
                <Text style={styles.headerText}>Login or Register to access this page</Text>
            </View>
            <View style={styles.restrictWrapper}>
                <TouchableOpacity onPress = {() => navigation.navigate('Login')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Log in</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => navigation.navigate('Register')}>
                    <View style={styles.button}>
                       <Text style={styles.buttonText}>Register</Text> 
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
    },
    headerText : {
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
        marginBottom: '0.5rem',
    },
    buttonText: {
        fontSize: '3rem',
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