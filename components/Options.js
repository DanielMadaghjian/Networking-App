import React, { useState } from "react";
import { Alert, Modal, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import colors from '../assets/colors/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

SimpleLineIcons.loadFont();


const options = [
    {
      id: "Home",
      title: "Edit Profile ",
    },
    {
      id: "PostEvent",
      title: "Settings",
    },
    {
      id: "Login",
      title: "Logout",
    },
  ];

  

const Options = ({navigation}) => {

  const [modalVisible, setModalVisible] = useState(false);
    return(
     
        <View >
           <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
              <TouchableOpacity style={{ marginHorizontal: 10}}>
                      <SimpleLineIcons name="options-vertical" size={16} color={colors.lightGrey} />
              </TouchableOpacity>
          </Pressable>
          
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
            
          >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  
                  <SafeAreaView style={styles.container}>
                      {options.map((option) => {
                            return (
                            <TouchableOpacity onPress={() => {navigation.navigate(option.id) , setModalVisible(!modalVisible)}} style={[styles.item]}>
                                <Text style={[styles.title]}>{option.title}</Text>
                              </TouchableOpacity>
                            );
                        })}
                  </SafeAreaView>    
                </View>
              </View>
            </Modal>
        </View>
    )   
}

const styles = StyleSheet.create({
    
      item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
      },
      title: {
        fontSize: 12,
      },
      centeredView: {
        // flex: 1,
         justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 40,
        
        
        
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
       
        padding: 2,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      //text in button
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: colors.white,
      },
      buttonClose: {
        backgroundColor: colors.darkBlue,   
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
}) 

export default Options;