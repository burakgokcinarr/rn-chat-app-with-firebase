import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../../config/firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Message() {

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUserList();
  }, [])

  const getUserList = async() => {
    const userdata = Array();
    const q = query(collection(db, "users"), where("userId", "!=", auth.currentUser.uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      //console.log(doc.id, " => ", doc.data());
      if (doc.data()) {
        userdata.push(doc.data());
      }
    });

    setUserList(userdata);
  }

  return (
    <View>
      <Text>Message1</Text>
      <Text>{userList.length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})