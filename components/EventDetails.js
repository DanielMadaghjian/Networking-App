import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import colors from '../assets/colors/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();

const height = Dimensions.get('window').height;

const EventDetails = ({route, navigation}) => {
    const {item} = route.params;

    return (
        <View style={styles.container}>
             
            <ImageBackground source={item.image} style={styles.backgroundImage}>
                <TouchableOpacity
                    style={styles.backIcon}
                    onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={32} color={colors.white} />
                </TouchableOpacity>
                <View style={styles.titlesWrapper}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.locationWrapper}>
                        <Entypo name="location-pin" size={24} color={colors.white} />
                        <Text style={styles.locationText}>{item.location}</Text>
                    </View>
                </View>
            </ImageBackground>

            <View style={styles.descriptionWrapper}>
                <View style={styles.descriptionTextWrapper}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                </View>

                <View style={styles.infoWrapper}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>Date</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>{item.date}</Text>
                            
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                            <Text style={styles.infoTitle}>Time</Text>
                            <View style={styles.infoTextWrapper}>
                                <Text style={styles.infoText}>{item.time}</Text>
                                
                            </View>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>Price</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>{item.price}</Text>
                            
                        </View>
                    </View>                   
                </View>
                <TouchableOpacity
                        style={styles.buttonWrapper}
                        onPress={() => alert('Your going to '+ item.title + '!')}>
                        <Text style={styles.buttonText}>Attend!</Text>
                    </TouchableOpacity>
            </View>           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    backgroundImage: {
        height: height * 0.3,
        justifyContent: 'space-between',
    },
    backIcon: {
        marginLeft: 20,
        marginTop: 30,
      },
    titlesWrapper: {
        marginHorizontal: 20,
        marginTop: 150,
      },
      itemTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 32,
        color: colors.white,
      },
      locationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
      },
      locationText: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: colors.white,
      },
    descriptionWrapper: {
        flex:1,
        backgroundColor: colors.white,
        marginTop: -20,
        borderRadius:20,
    },
    
    descriptionTextWrapper: {
        marginTop: 30,
        marginHorizontal: 20,
      },
      descriptionTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: colors.black,
      },
      descriptionText: {
        marginTop: 20,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.lightGrey,
        height: 85,
      },
      infoWrapper: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        justifyContent: 'space-between',
      },
      infoItem: {},
      infoTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 12,
        color: colors.lightGrey,
      },
      infoTextWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 5,
      },
      infoText: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.darkBlue,
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
      
})

export default EventDetails;