// import { Redirect } from "expo-router";

// const StartPage = () => {
//   return <Redirect href="/welcome" />
// }

// export default StartPage;

import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { Link } from 'expo-router'

const welcome = () => {

  return (
    <View style={styles.container} >
      <ImageBackground
        source={require('../assets/images/coffee-background.jpeg')}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Pressable style={styles.welcomeButton}>
          <Link href="/map">
            <Text style={styles.buttonText}>Get Started</Text>
          </Link>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

export default welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  welcomeButton: {
    width: '90%',
    height: 60,
    backgroundColor: "#BA826A",
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600,
  }
})