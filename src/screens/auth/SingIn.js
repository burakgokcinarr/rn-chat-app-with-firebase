import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Font, Colors } from '../../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { CustomInput, CustomButton } from '../../components';
import { AntDesign, Octicons } from '@expo/vector-icons';

export default function SingIn() {

  const navigation = useNavigation();
  const [mail, setMail]         = useState(null);
  const [password, setPassword] = useState(null)

  const onSingIn = () => {
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <CustomInput placeholderText='E-Posta' setText={setMail} icon={<AntDesign name="mail" size={wp(5)} color={Colors.WHITE_COLOR} />}/>
        <CustomInput placeholderText='Şifre' setText={setPassword} icon={<Octicons name="key" size={wp(5)} color={Colors.WHITE_COLOR} />} secure={true}/>
        <CustomButton title='Giriş Yap' onPress={onSingIn}/>
        <Text style={styles.account}>Hesabınız yok mu ? Kayıt Ol</Text>
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
    marginTop: wp(4),
    fontSize: wp(4),
    textDecorationLine: 'underline'
  }
})