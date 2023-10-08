import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome, AntDesign, Fontisto } from '@expo/vector-icons';
import { Colors as Color, Font } from '../../../constants';
import Settings from './Settings';
import Message from './Message';

const Tab = createBottomTabNavigator();

export default function TabView() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'chat') {
                        return <Fontisto name="hipchat" size={size} color={color} />
                    } else if (route.name === 'settings') {
                        return <Fontisto name="player-settings" size={size} color={color} />
                    } 
                },
                tabBarActiveTintColor: Color.GREEN_COLOR,
                tabBarInactiveTintColor: Color.WHITE_COLOR,
                headerShown: true,
                title: '',
                tabBarStyle: {
                    backgroundColor: Color.BLACK_COLOR_2,
                    borderTopWidth: 0
                }
            })}
        >
            <Tab.Screen name="chat" component={Message} options={{tabBarLabel: 'Chats', tabBarLabelStyle: {fontSize: 13, fontFamily: Font.medium}}}/>
            <Tab.Screen name="settings" component={Settings} options={{tabBarLabel: 'Settings', tabBarLabelStyle: {fontSize: 13, fontFamily: Font.medium}}}/>
        </Tab.Navigator>
    )
}