import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../../config/firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";
import { Colors, Font } from '../../../constants';
import {UserCard} from '../../../components';

export default function Message() {

  const [userList, setUserList]   = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserList();
  }, [])

  const getUserList = async() => {
    const userdata = Array();
    const q = query(collection(db, "users"), where("userId", "!=", auth.currentUser.uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " ==> ", doc.data());
      if (doc.data()) {
        userdata.push(doc.data());
      }
    });

    setUserList(userdata);
    setIsLoading(false)
  }

  if (isLoading) {
    return (
      <ActivityIndicator size='small' color={Colors.BLACK_COLOR_2} style={{margin: 10}}/>
    )
  }

  const _renderItem = ({ item }) => <UserCard data={item}/>

  return (
    <View style={styles.container}>
        <FlatList
          data={userList}
          renderItem={_renderItem}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR
  }
})