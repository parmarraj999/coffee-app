import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const order = () => {

  return (
    <View style={styles.container} >
      <Text>market</Text>
    </View>
  )
}

export default order

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  }
})