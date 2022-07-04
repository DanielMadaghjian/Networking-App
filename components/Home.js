import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, ImageBackground,} from 'react-native';



import discoverEvents from '../assets/data/discoverEvents';
import mostRecentEvents from '../assets/data/mostRecentEvents';

import colors from '../assets/colors/colors';

import Entypo from 'react-native-vector-icons/Entypo';

import profile from '../assets/images/person.png';

import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

Entypo.loadFont();

const Home = ({navigation}) => {
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
        <View style={styles.container}>
            <ScrollView>
                {/**HEADER */}
                <Text style={styles.introductionTitle}>Hi Daniel!</Text>  
                
                <View style={styles.headerWrapper}>                  
                    <Text style={styles.browseEventsTitle}>Explore Events</Text>
                    <TouchableOpacity  onPress={() => navigation.navigate('Login') }> 
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <Image source={profile} style={styles.profileImage}></Image>
                </View>

                {/**EXPLORE EVENTS */}
                <View style={styles.discoverItemsWrapper}>
                    <FlatList
                    data={discoverEvents}
                    renderItem={renderBrowseItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    />
                </View>

                 {/**MOST RECENT EVENTS */}
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
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    infoBackground: {
      borderRadius:20,
      backgroundColor: colors.lightBlue,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,      
    },
    headerWrapper: {
        marginHorizontal: 20,
        marginTop: 5,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        width: 52,
        height: 52,
        borderRadius: 10,
    },
    introductionTitle: {
        marginHorizontal: 20,
        fontFamily: 'Lato-Light',
        fontSize: 15,  
        marginLeft: 42,
    },
    browseEventsTitle: {        
        marginHorizontal: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 32,  
        fontWeight: 'bold',
    },
    discoverItemsWrapper: {
        paddingVertical: 20,
        
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
      recentEventsTitle: {
        marginHorizontal: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: colors.black,
        marginLeft: 20,
        marginBottom: 10,
      },
})

export default Home;