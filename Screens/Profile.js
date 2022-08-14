import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ProfileInfo from '../components/ProfileInfo';
import ProfileSocials from '../components/ProfileSocials';
import Options from '../components/Options';
import colors from '../assets/colors/colors';
// import user from '../assets/data/users';

const Profile = ({navigation}) => {
    const user =
    {
        "title": 'Javi Daniel',
         image: require('../assets/images/person.png'),
        "role": 'UX Designer',
        "bio": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        "eventsAttendedCount": 250,
        "eventsPostedCount": 50,
        "eventsAttended": [
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
        ],
        "EventsPosted": [
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
        ],
        "socials": [
            {
                "type": 'linkedin',
                "availiable": true,
                "name": 'Javi Daniel',
                "link": 'https://www.linkedin.com/in/diarmuidmcgonagle/',
                "image": 'https://media-exp1.licdn.com/dms/image/C5603AQF4WQOAQP_fvQ/profile-displayphoto-shrink_400_400/0/1619269064546?e=1662595200&v=beta&t=iGI7O8nMCfER4cPmcm-XMYS9CzhYSEZxavPnc3rW9eQ',
            },
            {
                "type": 'instagram',
                "availiable": true
            },
            {
                "type": 'twitter',
                "availiable": true,
                "name": 'Javi Daniel',
                "link": 'https://twitter.com/ManUtd',
                "image": 'https://media-exp1.licdn.com/dms/image/C5603AQF4WQOAQP_fvQ/profile-displayphoto-shrink_400_400/0/1619269064546?e=1662595200&v=beta&t=iGI7O8nMCfER4cPmcm-XMYS9CzhYSEZxavPnc3rW9eQ',
            },
            {
                "type": 'facebook',
                "availiable": true,
                "name": 'Javi Daniel',
                "link": 'https://www.facebook.com/St.FiniansCC/photos/?ref=page_internal',
                "image": 'https://media-exp1.licdn.com/dms/image/C5603AQF4WQOAQP_fvQ/profile-displayphoto-shrink_400_400/0/1619269064546?e=1662595200&v=beta&t=iGI7O8nMCfER4cPmcm-XMYS9CzhYSEZxavPnc3rW9eQ',
            },
        ],
    }

    return (
        <ScrollView>
            <View style={styles.profileWrapper}>
                {/**PROFILE INFO */}
                <ProfileInfo user={user} navigation={navigation}></ProfileInfo> 
                {/**SOCIALS */}
                <ProfileSocials user={user}></ProfileSocials>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    profileWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        flex: 1
    }
})

export default Profile;