import React from 'react';
import {View, Text, StyleSheet, ImageBackground,} from 'react-native';

import colors from '../assets/colors/colors';

import Entypo from 'react-native-vector-icons/Entypo';

import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

Entypo.loadFont();

const ExploreEvents = ({navigation}) => {

  const discoverEvents = [
      {
          id: 'discover-1',
          title: 'Dublin Tech Summit',
          location: 'Dogpatch Labs',
          date: '13/06/22-18/06/22',
          time: '9am-3pm',
          price: 'Free',
          image: require('../assets/images/DublinTechSummit.png'),
          description:
            "An ideal introduction to sea kayaking around the stunning historical Islands of Tofino's harbour. Come explore the spectacular scenery of the area and learn what makes the area so fascinating.",
          "attendees": [
              {
                "name": 'Daniel Madaghjian',
              },
              {
                "name": 'Diarmuid McGonagle',
              },
              {
                "name": 'Ryan Idowu',
              },

          ]
      },
      {
          id: 'discover-2',
          title: 'Gerry Cinnamon',
          location: 'Malahide Castle',
          date: '18/06/22',
          time: '7:30pm-10:30pm',
          price: 'Free',
          image: require('../assets/images/GerryCinnamon.png'),
          description:
            "An ideal introduction to sea kayaking around the stunning historical Islands of Tofino's harbour. Come explore the spectacular scenery of the area and learn what makes the area so fascinating.",
            "attendees": [
              {
                "name": 'Daniel Madaghjian',
              },
              {
                "name": 'Diarmuid McGonagle',
              },
              {
                "name": 'Ryan Idowu',
              },

          ]
        },
        {
          id: 'discover-3',
          title: 'Dans 21st',
          location: '24 Joy Street',
          date: '13/06/22',
          time: '7:30pm-12am',
          price: 'Free',
          image: require('../assets/images/birthday.png'),
          description:
            "An ideal introduction to sea kayaking around the stunning historical Islands of Tofino's harbour. Come explore the spectacular scenery of the area and learn what makes the area so fascinating.",
            "attendees": [
              {
                "name": 'Daniel Madaghjian',
              },
              {
                "name": 'Diarmuid McGonagle',
              },
              {
                "name": 'Ryan Idowu',
              },

          ]
        },  
  ]

        const renderBrowseItem = ({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('EventDetails', {
                    item: item,
                  })
                }
                >
                <ImageBackground
                  source={item.image}
                  style={[
                    styles.discoverItem,
                    {marginLeft: item.id === 'discover-1' || item.id === 'recent-1' ? 20 : 0},
                  ]}
                  imageStyle={styles.discoverItemImage}>
                  <View style={styles.infoBackground}>
                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                    <View style={styles.discoverItemLocationWrapper}>
                      <Entypo name="location-pin" size={18} color={colors.white} />
                      <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            );
          };
            
        return (
            <View style={styles.discoverItemsWrapper}>
                    <FlatList
                    data={discoverEvents}
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