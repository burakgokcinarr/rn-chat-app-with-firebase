import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { Font, Colors } from '../../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { CustomInput, CustomButton } from '../../components';
import { AntDesign, Octicons, Entypo } from '@expo/vector-icons';
import { auth, db } from '../../config/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from 'firebase/firestore';

export default function SingUp() {

  const navigation              = useNavigation();
  const [mail, setMail]         = useState(null);
  const [password, setPassword] = useState(null)
  const [name, setName]         = useState(null)

  const onSingUp = () => {
    createUserWithEmailAndPassword(auth, mail, password)
    .then((userCredential) => {
        const user = userCredential.user;
        // User Detail Update
        updateProfile(user, {
          displayName: name
        }).then((data) => {
          writeUserData(user.uid);
        })
    })
    .catch((error) => {
        alert(error)
    });
  }

  const writeUserData = async(userId) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        userId: userId,
        email: mail,
        name: name
      });
      console.log("Create User written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <CustomInput placeholderText='E-Posta' setText={setMail} icon={<AntDesign name="mail" size={wp(5)} color={Colors.WHITE_COLOR} />}/>
        <CustomInput placeholderText='Şifre' setText={setPassword} icon={<Octicons name="key" size={wp(5)} color={Colors.WHITE_COLOR} />} secure={true}/>
        <CustomInput placeholderText='Name' setText={setName} icon={<Entypo name="pencil" size={wp(5)} color={Colors.WHITE_COLOR} />} />
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
    marginTop: wp(4),
    fontSize: wp(4)
  }
})