import React from 'react';
import {View, Text, StyleSheet, ImageBackground,} from 'react-native';

import mostRecentEvents from '../assets/data/mostRecentEvents';

import colors from '../assets/colors/colors';

import Entypo from 'react-native-vector-icons/Entypo';

import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

Entypo.loadFont();

const MostRecentEvents = ({navigation}) => {
   
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
                 <Text style={styles.recentEventsTitle}>Most Recent</Text>
                    <FlatList
                    data={mostRecentEvents}
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
      recentEventsTitle: {
        marginHorizontal: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: colors.black,
        marginLeft: 20,
        marginBottom: 10,
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
export default MostRecentEvents;