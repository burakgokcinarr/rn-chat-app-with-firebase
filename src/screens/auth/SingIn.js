import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Font, Colors } from '../../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { CustomInput, CustomButton } from '../../components';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { auth } from '../../config/firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SingIn() {

  const navigation              = useNavigation();
  const [mail, setMail]         = useState(null);
  const [password, setPassword] = useState(null)

  const onSingIn = () => {
    if (mail != '' && mail != null) {
      signInWithEmailAndPassword(auth, mail, password).then((userCredential) => {
        navigation.navigate('home');
      }).catch((err) => {
        alert(err);
      })
    } else {
      alert("Please check your E-Mail and/or Password.")
    }
  }

  const onSingUp = () => {
    navigation.navigate('singup');
  }

  const forgotPassword = () => {
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <CustomInput placeholderText='E-Posta' setText={setMail} icon={<AntDesign name="mail" size={wp(5)} color={Colors.WHITE_COLOR} />} type='email-address'/>
        <CustomInput placeholderText='Şifre' setText={setPassword} icon={<Octicons name="key" size={wp(5)} color={Colors.WHITE_COLOR} />} secure={true}/>
        <TouchableOpacity onPress={forgotPassword} style={{alignSelf: 'flex-end', marginHorizontal: wp(2)}}>
          <Text style={styles.account}>Şifrenizi mi unuttunuz?</Text>
        </TouchableOpacity>
        <CustomButton title='Giriş Yap' onPress={onSingIn}/>
        <CustomButton title='Kayıt Ol' onPress={onSingUp} customStyle={{backgroundColor: Colors.BLUE_COLOR}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: wp(80),
    height: hp(35),
    borderRadius: wp(5),
    justifyContent: 'center',
    backgroundColor: Colors.BLACK_COLOR_2,
  },
  account: {
    color: Colors.BLUE_COLOR,
    fontFamily: Font.regular,
    textAlign: 'center',
    marginTop: wp(3),
    fontSize: wp(4),
    textDecorationLine: 'underline',
    textDecorationColor: Colors.WHITE_COLOR
  
  }
})