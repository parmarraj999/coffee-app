import { Stack } from 'expo-router'
import React from 'react'

function HomeStack() {
  return (
   <Stack  screenOptions={{headerTitle:"Coffee's Menu"
   }}>
    <Stack.Screen name='index'/>
    <Stack.Screen name='[id]'/>
    <Stack.Screen name='setting'/>
   </Stack>
  )
}

export default HomeStack