import React from 'react';
import {View, Text, StyleSheet, ImageBackground,ScrollView} from 'react-native';

import colors from '../assets/colors/colors';

import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();

import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';



// Follow same approach to MostRecentEvents.js
const UserEventsPosted = ({navigation}) => {
  const EventsPosted = [
    {
        id: 'recent-1',
        title: 'TES Talk',
        location: 'Trinity College Dublin',
        date: '18/06/22',
        time: '9am-3pm',
        price: 'Free',
        image: require('../assets/images/TES.png'),
        description:
          "An ideal introduction to sea kayaking around the stunning historical Islands of Tofino's harbour. Come explore the spectacular scenery of the area and learn what makes the area so fascinating.",
    },
    {
        id: 'recent-2',
        title: 'Longitude Pre Drinks',
        location: '24 Joy Street',
        date: '18/06/22',
        time: '10:30am-12:30am',
        price: 'Free',
        image: require('../assets/images/longitude.png'),
        description:
          "An ideal introduction to sea kayaking around the stunning historical Islands of Tofino's harbour. Come explore the spectacular scenery of the area and learn what makes the area so fascinating.",
      },
      {
        id: 'recent-3',
        title: 'Irish Derby Festival',
        location: 'Curragh Racecourse Kildare',
        date: '25/06/22',
        time: '2:30pm-8pm',
        price: 'Free',
        image: require('../assets/images/derby.png'),
        description:
          "An ideal introduction to sea kayaking around the stunning historical Islands of Tofino's harbour. Come explore the spectacular scenery of the area and learn what makes the area so fascinating.",
      },
      {
        id: 'recent-4',
        title: 'Irish Derby Festival',
        location: 'Curragh Racecourse Kildare',
        date: '25/06/22',
        time: '2:30pm-8pm',
        price: 'Free',
        image: require('../assets/images/derby.png'),
        description:
          "An ideal introduction to sea kayaking around the stunning historical Islands of Tofino's harbour. Come explore the spectacular scenery of the area and learn what makes the area so fascinating.",
      },
      {
        id: 'recent-5',
        title: 'Irish Derby Festival',
        location: 'Curragh Racecourse Kildare',
        date: '25/06/22',
        time: '2:30pm-8pm',
        price: 'Free',
        image: require('../assets/images/derby.png'),
        description:
          "An ideal introduction to sea kayaking around the stunning historical Islands of Tofino's harbour. Come explore the spectacular scenery of the area and learn what makes the area so fascinating.",
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
        <View style = {styles.gridBox}>
          <ImageBackground
            source={item.image}
            style={[
              styles.discoverItem,
              // {marginLeft: item.id === 'discover-1' || item.id === 'recent-1' ? 20 : 0},
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
        </View>
      </TouchableOpacity>
    );
  };
  const handleEmpty = () => {
    return <Text style={styles.recentEventsTitle}> No events posted.</Text>;
  };

    return (
        <ScrollView style={styles.discoverItemsWrapper}>
          <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>Go Back</Text>
                </TouchableOpacity>
             <Text style={styles.recentEventsTitle}>Events Posted</Text>
                <FlatList
                data={EventsPosted}
                renderItem={renderBrowseItem}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={handleEmpty}
                numColumns={2}
                />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
  
    discoverItemsWrapper: {
        backgroundColor: colors.white,
        flex: 1,
      },
      gridBox: {
        flex: 1,
        marginVertical: 30,
        
      },
      backText: {
        textAlign: "screenLeft",
        marginLeft: 20,
        color: 'red',
        marginVertical: 40,
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
        marginHorizontal: 12,       
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
        textAlign: "center"
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

export default UserEventsPosted;