import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../../../config/firebaseConfig'
import { signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

export default function Settings() {

  const navigation = useNavigation();

  const logout = () => {
    signOut(auth).then(() => {
      navigation.navigate('onboarding');
    })
  }

  return (
    <View>
      <Text>{auth.currentUser.displayName}</Text>
      <Button
        title='Log out'
        onPress={logout}
      />
    </View>
  )
}

const styles = StyleSheet.create({})