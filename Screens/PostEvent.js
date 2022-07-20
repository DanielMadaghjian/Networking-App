import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';

const PostEvent = () => {
  const [title, setTitle] = useState('');
  return (
    <View style={styles.container}>
      
      <View>
        <TextInput placeholder="Title" style={styles.inputStyle} onChangeText={text => setTitle(text)}/>
        <TextInput placeholder="Organisation/Company" style={styles.inputStyle} />
        <TextInput placeholder="Location" style={styles.inputStyle} />
        <View style={styles.locationAndText}>
            <TextInput placeholder="Date" style={styles.inputStyleDateAndTime} />
            <TextInput placeholder="Time" style={styles.inputStyleDateAndTime}/>
        </View> 

        <TextInput placeholder="Description" style={styles.inputStyleDescription} />
        {/* <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.inputStyle}         
        />       */}
      </View>
         <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => alert('You posted the event: ' + title)}>
            <Text style={styles.buttonText}>Post!</Text>
        </TouchableOpacity> 
    </View>
  );
};

/**
 * Add date and time properties to input fields
 * Have required fields and appropiate error messages
 * upload picture option?
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  formLabel: {
    fontSize: 20,
    color: colors.lightBlue,
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: colors.lightBlue,
  },
  inputStyleDateAndTime: {
    marginTop: 20,
    width: 100,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
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
  locationAndText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  buttonWrapper: {
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

export default PostEvent;