import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const map = () => {
    return (
        <View style={styles.container} >
            <Image source={require('../assets/images/map.jpeg')} style={styles.mapBanner} />
            <View style={styles.mapDetails} >
                <Text style={styles.mapHeading}>Starbucks</Text>
                <Text style={styles.timer} >20 min</Text>
                <Pressable style={styles.menuButton}>
                    <Link href={"/(tabs)/home"}  >
                        <Text style={styles.buttonText}>View Menu</Text>
                    </Link>
                </Pressable>
                <Text style={styles.address} >Address</Text>
                <Text style={styles.addressMini}>375/3 Saket Nagar</Text>
                <Text style={styles.addressMini}>Bhopal, Madhya Pradesh</Text>
            </View>
        </View>
    )
}

export default map

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapBanner: {
        width: '100%',
        height: 500
    },
    mapDetails: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    mapHeading: {
        fontSize: 24,
        fontWeight: "bold"
    },
    timer: {
        fontSize: 18,
        fontWeight: 600,
        color: "grey"
    },
    menuButton: {
        width: '100%',
        backgroundColor: "#BA826A",
        height: 60,
        marginTop: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center",
        borderWidth: 2,
        borderColor: 'black',
    },
    buttonText:{
        fontSize:18,
        fontWeight:600
    },
    address:{
        fontSize:20,
        fontWeight:600,
        marginTop:15
    },
    addressMini:{
        fontSize:16,
        color:'grey'
    }
})