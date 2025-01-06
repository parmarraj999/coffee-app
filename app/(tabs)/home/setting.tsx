import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const setting = () => {
  return (
    <View>
      <Text>Setting Page</Text>
      <Link href="/home" >Back To Home</Link>
    </View>
  )
}

export default setting