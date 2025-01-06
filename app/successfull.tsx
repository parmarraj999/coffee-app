import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const successfull = () => {
    return (
        <View style={styles.container} >
            <StatusBar style='auto'/>
            <Text style={styles.text}>Order Successfull</Text>
            <TouchableOpacity style={styles.backButton}>
                <Link href='/home'>
                    <Text style={{ fontSize: 18, fontWeight: 600, color: 'white' }}>Go To Menu</Text>
                </Link>
            </TouchableOpacity>
        </View>
    )
}

export default successfull

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BA826240',
        alignItems: "center",
        justifyContent: 'center',
        gap: 10
    },
    text: {
        fontSize: 32,
        fontWeight: 600,
        color: "#BA826A"
    },
    backButton: {
        width: 200,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#BA826A',
        justifyContent: 'center',
        alignItems: 'center',
    }
})