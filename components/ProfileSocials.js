import React from 'react';
import colors from '../assets/colors/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, Image, View, Text, Linking } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler/lib/commonjs';
// import user from '../assets/data/users';

const ProfileSocials = ({user}) => {
    const renderSocials = ({ item }) => {
        if (item.availiable == false) return
        return (
            <View style={{marginVertical: 5}}>
                <FontAwesome.Button style={styles.socialCard} name={item.type} backgroundColor={colors[item.type]} onPress={() => { Linking.openURL(`${item.link}`) }}>
                    {item.type}
                </FontAwesome.Button>
            </View>
        )
    }
    return (
        <View>
                <View style={styles.socialsWrapper}>
                    <View style={styles.socialsHeader}>
                        <Text>My Socials</Text>
                        {/* Should be buttons */}
                        <View style={styles.symbolContainer}>
                            <TouchableOpacity>
                                <Entypo name='list' color={colors.darkBlue} size={18} />
                            </TouchableOpacity >
                            <TouchableOpacity>
                            <MaterialCommunityIcons name='view-grid' color={colors.darkBlue} size={18} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.socials}>
                        <FlatList
                            data={user.socials}
                            renderItem={renderSocials}
                            keyExtractor={item => item.id}
                            marginBottom
                        />
                    </View>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    symbolContainer: {
        flexDirection: 'row',
        width: 50,
        justifyContent: 'space-between'
    },
    socials: {
        marginTop: 10,
        height: 300,
    },
    socialCard: {
        textTransform: 'capitalize',
        width: 250,
        marginBottom: 5,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    socialsWrapper: {
        marginTop: 20,
        borderColor: colors.lightBlue,
        borderRadius: '10',
        alignItems: 'center',
        width: 275,
        flex: 1,
        justifyContent: 'flex-end',
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    socialsHeader: {
        width: 250,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        fontSize: 20,
    },
})

export default ProfileSocials;