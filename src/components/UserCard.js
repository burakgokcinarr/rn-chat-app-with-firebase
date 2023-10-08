import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors, Font } from '../constants';

export default function UserCard({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.email}>{data.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 0.5,
        margin: wp(2),
        padding: wp(3),
        borderRadius: wp(2)
    },
    name: {
        fontFamily: Font.medium,
        fontSize: wp(4),
        color: Colors.BLACK_COLOR_2
    },
    email: {
        fontFamily: Font.regular,
        fontSize: wp(3),
        color: Colors.GRAY_COLOR
    }
})