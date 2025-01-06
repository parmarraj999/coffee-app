import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const LayoutTab = () => {
  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        height: 60
      }
    }}>
      <Tabs.Screen name='home' options={{
        headerTitle: "Coffee's Menu",
        tabBarLabel: "Menu",
        headerShown: false,
        tabBarIcon: ({ }) => {
          return <Ionicons name="home" size={30} color={"black"} />;
        },
        tabBarActiveTintColor: 'blackf',
        tabBarInactiveTintColor: 'gray',
      }}
      />
      <Tabs.Screen name='order' options={{ 
        tabBarLabel: "Orders", 
        headerTitle: "Your Orders",
        tabBarIcon: ({ }) => {
          return <Ionicons name="menu" size={30} color={"black"} />;
        },
        tabBarActiveTintColor: 'blackf',
        tabBarInactiveTintColor: 'gray',
      }}
       />
    </Tabs>
  )
}

export default LayoutTab