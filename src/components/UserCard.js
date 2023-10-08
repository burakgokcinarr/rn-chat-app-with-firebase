import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors, Font } from '../constants';
import { AntDesign } from '@expo/vector-icons';

export default function UserCard({ data, onClicked }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onClicked(data)}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <View>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.email}>{data.email}</Text>
        </View>
        <AntDesign name="caretright" size={wp(5)} color={Colors.GREEN_COLOR} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 0.5,
        margin: wp(2),
        padding: wp(3),
        borderRadius: wp(2),
        backgroundColor: Colors.BLACK_COLOR_2
    },
    name: {
        fontFamily: Font.medium,
        fontSize: wp(4),
        color: Colors.GREEN_COLOR
    },
    email: {
        fontFamily: Font.regular,
        fontSize: wp(3),
        color: Colors.GRAY_COLOR
    }
})