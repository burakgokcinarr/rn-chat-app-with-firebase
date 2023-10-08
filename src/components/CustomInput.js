import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Colors, Font } from '../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function CustomInput({ placeholderText = "", setText = null, icon = true, secure= false, type = 'default' }) {
  return (
    <View style={styles.inputContainer}>
      { icon }
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor={Colors.WHITE_COLOR}
        style={styles.input}
        onChangeText={setText}
        secureTextEntry={secure}
        autoCapitalize="none"
        keyboardType={type}
        textContentType='oneTimeCode'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(4),
    borderBottomWidth: 2,
    borderBottomColor: Colors.WHITE_COLOR,
    marginTop: 5,
    gap: wp(2)
  },
  input: {
    height: hp(5),
    width: wp(60),
    padding: 5,
    color: Colors.WHITE_COLOR,
    fontFamily: Font.regular,
    fontSize: wp(4),
  }
})