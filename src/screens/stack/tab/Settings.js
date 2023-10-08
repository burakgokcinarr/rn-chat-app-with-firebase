import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../../../config/firebaseConfig'
import { signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { CustomButton } from '../../../components'
import { Colors, Font } from '../../../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Settings() {

  const navigation = useNavigation();

  const logout = () => {
    signOut(auth).then(() => {
      navigation.navigate('onboarding');
    })
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{auth.currentUser.displayName}</Text>
        <Text style={styles.title}>{auth.currentUser.email}</Text>
        <CustomButton
          title='Log out'
          onPress={logout}
          customStyle={{backgroundColor: Colors.GREEN_COLOR}}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: Font.regular,
    fontSize: wp(4),
    color: Colors.DARK_COLOR
  }
})