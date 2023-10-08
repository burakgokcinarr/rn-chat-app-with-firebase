import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat'
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot
} from 'firebase/firestore';
import { auth, db } from '../../config/firebaseConfig';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Font } from '../../constants';

export default function Chat() {

  const route      = useRoute();
  const sendUserId = route.params.userId; // Mesaj Gönderilecek kişi Id
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, 'chats');
    const q = query(collectionRef, orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(q, querySnapshot => {
      setMessages(
        querySnapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];    
    addDoc(collection(db, 'chats'), {
      _id,
      createdAt,
      text,
      user
    });
  }, []);

  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: Colors.BLACK_COLOR_2,
          margin: 5,
          borderRadius: 10
        }}
      />
    );
  };

  return (
   <SafeAreaView style={{flex: 1}}>
     <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={true}
        onSend={messages => onSend(messages)}
        alwaysShowSend={true}
        renderInputToolbar={props => customtInputToolbar(props)}
        user={{
          _id: auth?.currentUser?.email,
          avatar: 'https://i.pravatar.cc/300'
        }}
      />
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({})