import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {

  const coffeeData = [
    {
      name: "Expresso",
      imgUrl: "../../../assets/images/espresso.png"
    },
    {
      name: "Cappuccino",
      imgUrl: "../../../assets/images/cappucinno.png"
    },
    {
      name: "Cappuccino",
      imgUrl: "../../../assets/images/cappucinno.png"
    },
    {
      name: "Cappuccino",
      imgUrl: "../../../assets/images/cappucinno.png"
    },
    {
      name: "Macciato",
      imgUrl: "../../../assets/images/macciato.png"
    },
    {
      name: "Cappuccino",
      imgUrl: "../../../assets/images/cappucinno.png"
    },
  ]

  return (
    <View style={styles.container} >
      <Link href='/(tabs)/home/espresso' >
        <View style={styles.coffeeItem}>
          <Image style={{  }} source={require("../../../assets/images/espresso.png")} />
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Espresso</Text>
        </View>
      </Link>
      <Link href='/(tabs)/home/cappuccino' >
        <View style={styles.coffeeItem}>
          <Image  source={require("../../../assets/images/cappuccino.png")} />
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Cappuccino</Text>
        </View>
      </Link>
      <Link href='/(tabs)/home/macciato' >
        <View style={styles.coffeeItem}>
          <Image  source={require("../../../assets/images/macciato.png")} />
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Macciato</Text>
        </View>
      </Link>
      <Link href='/(tabs)/home/mocha' >
        <View style={styles.coffeeItem}>
          <Image  source={require("../../../assets/images/mocha.png")} />
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Mocha</Text>
        </View>
      </Link>
      <Link href='/(tabs)/home/latte' >
        <View style={styles.coffeeItem}>
          <Image  source={require("../../../assets/images/latte.png")} />
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Latte</Text>
        </View>
      </Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  coffeeItem: {
    width: '100%',
    height: 90,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 20,
  }
})