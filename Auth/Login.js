import React, { useState } from 'react';

import { View, CheckBox, Text, StyleSheet, ScrollView, ImageBackground, Dimensions, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import backgroundImage from '../assets/images/backgroundImage.jpg';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Login = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);

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
                <View style={{ marginTop: 40, marginLeft: 40 }}>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <Text>
                        Don't have an account?
                        <TouchableOpacity onPress={() =>
                            navigation.navigate('Register')
                            } >
                            <Text style={styles.registerNowText}>{'  '} Register Now</Text>
                        </TouchableOpacity>
                </Text>
            </View>
            <View style={styles.formWrapper}>
                <TextInput placeholder="Email" style={styles.inputStyle} />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    style={styles.inputStyle}
                />


                <View style={styles.forgotPassView}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}>Remember Me</Text>
                        <TouchableOpacity>
                            <Text style={styles.label}>Forgot Password</Text>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity
                        style={styles.buttonWrapper}
                        onPress={() => alert('You logged in! ')}>
                        <Text style={styles.buttonText}>Login!</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1 }}>
                    <Text style={{ alignSelf: 'center', marginTop: 5 }}>or Login With</Text>
                    <View style={styles.socialLoginView}>
                        <TouchableOpacity style={{ marginHorizontal: 20 }}>
                            <MaterialCommunityIcons name="facebook" size={42} color={colors.darkBlue} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 20 }}>
                            <MaterialCommunityIcons name="twitter" size={42} color={colors.lightBlue} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 20 }}>
                            <MaterialCommunityIcons name="gmail" size={42} color='red' />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>


        </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    imageBackground: {
        height: height * 0.3,
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
    bottomView: {
        flex: 1.5,
        backgroundColor: colors.white,
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    welcomeText: {
        color: colors.darkBlue,
        fontSize: 34
    },
    registerNowText: {
        color: 'red',
        fontStyle: 'italic',
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

    forgetPassView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
        marginTop: 20,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
        color: '#8f9195',
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
    socialLoginView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    backText: {
        textAlign: "screenLeft",
        marginLeft: 20,
        color: 'red',
        marginTop: 40,
    },

});

export default Login;