import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, StyleSheet, View, TextInput, Image, Platform, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();
import emptyImage from '../assets/images/empty image.jpg';
import * as ImagePicker from 'expo-image-picker';

const CreateOrganisation = () => {
    const [image, setImage] = useState(emptyImage);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    console.log(image, name, type, location, description)

    const handleClick = async () => {

         //needs error checking
        
        //create form and append data and image
        const formData = new FormData();
        formData.append('name', name);
        formData.append('type', type);
        formData.append('location', location);
        formData.append('description', description);
        formData.append('image', {
            uri: image,
            type: "image/jpeg",
            name: "photo.jpg"
        })
        console.log(formData)

        //post form to http(TO DO)///////////////////////////////////////////////


    };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                {image && <Image source={{ uri: image }} style={styles.EmptyImage} />}
                <TouchableOpacity style={{ marginTop: 80, }} onPress={() => pickImage()}>
                    <FontAwesome name="upload" size={22} color={colors.darkBlue} />
                </TouchableOpacity>
            </View>
            <View>
                <TextInput placeholder="Organisation Name" style={styles.inputStyle} value={name} onChangeText={name => setName(name)} />
                <TextInput placeholder="Organisation Type" style={styles.inputStyle} value={type} onChangeText={type => setType(type)} />
                <TextInput placeholder="Location" style={styles.inputStyle} value={location} onChangeText={location => setLocation(location)} />
                <TextInput placeholder="Description" style={styles.inputStyleDescription} value={description} onChangeText={description => setDescription(description)} />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={styles.postButtonWrapper}
                    onPress={() => handleClick()}
                >
                    <Text style={styles.buttonText}>Create!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    EmptyImage: {
        width: 100,
        height: 100,
        borderRadius: 40,
    },
    inputStyle: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: colors.lightBlue,
    },
    inputStyleDescription: {
        marginTop: 20,
        width: 300,
        height: 100,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: colors.lightBlue,
    },
    postButtonWrapper: {
        marginHorizontal: 20,
        marginTop: 40,
        backgroundColor: colors.darkBlue,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white,
        marginHorizontal: 20,
    },
});


export default CreateOrganisation