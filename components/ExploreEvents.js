import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, ImageBackground,} from 'react-native';

import colors from '../assets/colors/colors';

import Entypo from 'react-native-vector-icons/Entypo';

import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import gerryImage from '../assets/images/GerryCinnamon.png';

Entypo.loadFont();

const ExploreEvents = ({navigation}) => {
  
  const eventsCalled = [
    {
      id: "",
      title: "hellooooo",
      location: "",
      date: "",
      time: "",
      price: "",
      description: ""
    },
    {
      id: "",
      title: "",
      location: "",
      date: "",
      time: "",
      price: "",
      description: ""
    },
    {
      id: "3",
      title: "",
      location: "",
      date: "",
      time: "",
      price: "",
      description: ""
    }
  ];

  //calls get Request in the background
  useEffect( () => {
    multipleRequestsInSingleCall();
  }, []);

  const multipleRequestsInSingleCall = () => {
    axios
      .all([
        axios
          .get('http://localhost:3000/events/20')
          .then(function (response) {
            // handle success
            eventsCalled[0].id = '1';
            eventsCalled[0].title = response.data.title;
            eventsCalled[0].location = response.data.location;
            eventsCalled[0].date = response.data.date;
            eventsCalled[0].time = response.data.time;
            eventsCalled[0].price = response.data.price;
            eventsCalled[0].description = response.data.description;
            console.log(eventsCalled[0].date);

          }),
        axios
          .get('http://localhost:3000/events/22')
          .then(function (response) {
            // handle success
        
            eventsCalled[1].id = '2';
            eventsCalled[1].title = response.data.title;
            eventsCalled[1].location = response.data.location;
            eventsCalled[1].date = response.data.date;
            eventsCalled[1].time = response.data.time;
            eventsCalled[1].price = response.data.price;
            eventsCalled[1].description = response.data.description;
          }),
        axios
          .get('http://localhost:3000/events/3')
          .then(function (response) {
            // handle success
            eventsCalled[2].id = '3';
            eventsCalled[2].title = response.data.title;
            eventsCalled[2].location = response.data.location;
            eventsCalled[2].date = response.data.date;
            eventsCalled[2].time = response.data.time;
            eventsCalled[2].price = response.data.price;
            eventsCalled[2].description = response.data.description;
          }),
      ])
      
  };

  // const discoverEvents = [
  //     {
  //         id: 'discover-1',
  //         title: 'Dublin Tech Summit',
  //         location: 'Dogpatch Labs',
  //         date: '13/06/22-18/06/22',
  //         time: '9am-3pm',
  //         price: 'Free',
  //         image: require('../assets/images/DublinTechSummit.png'),
  //         description:
  //           "An ideal introduction to sea kayaking around the stunning historical Islands of Tofino's harbour. Come explore the spectacular scenery of the area and learn what makes the area so fascinating.",
  //         "attendees": [
  //             {
  //               "name": 'Daniel Madaghjian',
  //             },
  //             {
  //               "name": 'Diarmuid McGonagle',
  //             },
  //             {
  //               "name": 'Ryan Idowu',
  //             },

  //         ]
  //     },
  //     {
  //         id: 'discover-2',
  //         title: 'Gerry Cinnamon',
  //         location: 'Malahide Castle',
  //         date: '18/06/22',
  //         time: '7:30pm-10:30pm',
  //         price: 'Free',
  //         image: require('../assets/images/GerryCinnamon.png'),
  //         description:
  //           "An ideal introduction to sea kayaking around the stunning historical Islands of Tofino's harbour. Come explore the spectacular scenery of the area and learn what makes the area so fascinating.",
  //           "attendees": [
  //             {
  //               "name": 'Daniel Madaghjian',
  //             },
  //             {
  //               "name": 'Diarmuid McGonagle',
  //             },
  //             {
  //               "name": 'Ryan Idowu',
  //             },

  //         ]
  //       },
  //       {
  //         id: 'discover-3',
  //         title: 'Dans 21st',
  //         location: '24 Joy Street',
  //         date: '13/06/22',
  //         time: '7:30pm-12am',
  //         price: 'Free',
  //         image: require('../assets/images/birthday.png'),
  //         description:
  //           "An ideal introduction to sea kayaking around the stunning historical Islands of Tofino's harbour. Come explore the spectacular scenery of the area and learn what makes the area so fascinating.",
  //           "attendees": [
  //             {
  //               "name": 'Daniel Madaghjian',
  //             },
  //             {
  //               "name": 'Diarmuid McGonagle',
  //             },
  //             {
  //               "name": 'Ryan Idowu',
  //             },

  //         ]
  //       },  
  // ]

        const renderBrowseItem = ({item}) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('EventDetails', {
                      item: item,
                    })
                  }
                  >
                  <ImageBackground
                    source={gerryImage}
                    style={[
                      styles.discoverItem,
                      {marginLeft: 20},
                    ]}
                    imageStyle={styles.discoverItemImage}>
                    <View style={styles.infoBackground}>
                      <Text style={styles.discoverItemTitle}>{item.date}</Text>
                      <View style={styles.discoverItemLocationWrapper}>
                        <Entypo name="location-pin" size={18} color={colors.white} />
                        <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            );
          };
            
        return (
            
            <View style={styles.discoverItemsWrapper}>
                {/* <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={multipleRequestsInSingleCall}>
                      <Text>Simple Get Call</Text>
                </TouchableOpacity> */}
                    
                    <FlatList
                    data={eventsCalled}
                    renderItem={renderBrowseItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    />
            </View>
        ) 
};

const styles = StyleSheet.create({
    discoverItemsWrapper: {
        paddingVertical: 20,  
      },
      infoBackground: {
        borderRadius:20,
        backgroundColor: colors.lightBlue,
      },
      discoverItem: {
        width: 170,
        height: 250,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20,       
      },
      discoverItemImage: {
        borderRadius: 20,
        
      },
      discoverItemTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white,
        marginTop: 10,
        marginRight: 5,
        marginLeft: 5,
        
      },
      discoverItemLocationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
      },
      discoverItemLocationText: {
        marginLeft: 5,
        fontFamily: 'Lato-Bold',
        fontSize: 14,
        color: colors.white,
        marginBottom: 2,
      },
})
export default ExploreEvents;