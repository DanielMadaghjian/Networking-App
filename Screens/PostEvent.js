import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Text, StyleSheet, View, TextInput, Image, Platform, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();
import emptyImage from '../assets/images/empty image.jpg';
import * as ImagePicker from 'expo-image-picker';

const PostEvent = () => {
  console.log(title, organisation, location, date, time, price, description)
  // const requestOptions = {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ title:'daniel', organisation:organisation, location: location, date:date, time:time, price:price, description:description })
    
  // };  
// const handleClick = async () => {
//   try {
//     await fetch('http://localhost:3000/events', { 
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title:'daniel', organisation:organisation, location: location, date:date, time:time, price:price, description:description })
//   })
//     .then(response => {
//       response.json()
//           .then(data => {
//               Alert.alert("The title is: " + title);
//           });
//   })
//     // .then(response => response.json())
//     // .then(data => console.log(data));
//   }
//   catch (error) {
//     console.error(error);
// }

const handleClick = async () => {
 
  try {
    const response = await axios.post(`http://localhost:3000/events`, {
      title,
      organisation,
      location,
      date,
      time,
      price,
      description
    });
    if (response.status === 201) {
      alert(` You have created: ${JSON.stringify(response.data)}`);
      setTitle('');
      setOrganisation('');
      setDate('');
      setTime('');
      setPrice('');
      setDescription('');
    } 
    else if(response.status === 200) {
      alert("You have posted the event: " + title)
    }
    else {
      throw new Error("An error has occurred ");
    }
  } catch (error) {
     alert("An error has occurred");
    
  }
};
  const [image, setImage] = useState(emptyImage);
  const [title, setTitle] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  
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
      <View style={{ flexDirection: 'row'}}>
          {image && <Image source={{ uri: image }} style={styles.EmptyImage} />}
          <TouchableOpacity style={{marginTop: 80,}} onPress= {() => pickImage()}>
                  <FontAwesome name="upload" size={22} color={colors.darkBlue} />
          </TouchableOpacity>
      </View>
      <View>
        <TextInput placeholder="Title" style={styles.inputStyle} value={title} onChangeText={title => setTitle(title)}/>
        <TextInput placeholder="Organisation/Company" style={styles.inputStyle} value={organisation} onChangeText={organisation => setOrganisation(organisation)}/>
        <TextInput placeholder="Location" style={styles.inputStyle} value={location} onChangeText={location => setLocation(location)}/>
        <View style={styles.locationAndText}>
            <TextInput placeholder="Date" style={styles.inputStyleDateAndTime} value={date} onChangeText={date => setDate(date)} />
            <TextInput placeholder="Time" style={styles.inputStyleDateAndTime} value={time} onChangeText={time => setTime(time)}/>
            <TextInput placeholder="Price" style={styles.inputStyleDateAndTime} value={price} onChangeText={price => setPrice(price)}/>
        </View> 

        <TextInput placeholder="Description" style={styles.inputStyleDescription} value={description} onChangeText={description => setDescription(description)}/>
      </View>
      
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity
            style={styles.cancelButtonWrapper}
            onPress={() => alert('You cancelled the event: ' + title)}>
              <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity> 
          <TouchableOpacity
            style={styles.postButtonWrapper}
            onPress={() => handleClick()}
            >
              <Text style={styles.buttonText}>Post!</Text>
          </TouchableOpacity> 
        </View>
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
  EmptyImage: {
    width: 100,
    height: 100,
    borderRadius: 40,
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
  postButtonWrapper: {
    marginHorizontal: 20,
    marginTop: 40,
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  cancelButtonWrapper: {
    marginHorizontal: 20,
    marginTop: 50,
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    width: 60,
    height: 35,
    
  },
  buttonText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 20,
  },
});

export default PostEvent;