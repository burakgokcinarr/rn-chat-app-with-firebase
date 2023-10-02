import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { Colors, Font } from '../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function CustomButton({ title = "", onPress={onPress}, customStyle = {}}) {
  return (
    <TouchableOpacity style={[styles.container, customStyle]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: Colors.WHITE_COLOR,
        marginTop: 15,
        width: wp(35),
        padding: 10,
        borderRadius: wp(2)
    },
    text: {
        textAlign: 'center',
        fontFamily: Font.medium,
        fontSize: wp(4)
    }
})