import { View, Text, StyleSheet, Image, Button, Pressable, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, Stack, useLocalSearchParams } from 'expo-router'


type Coffee = {
    name: string;
    image: string;
    price: number
};

const CoffeeDetail = () => {

    const { id } = useLocalSearchParams();

    const coffeeData: Coffee[] = [
        {
            name: "espresso",
            image: require("../../../assets/images/espresso.png"),
            price: 15
        },
        {
            name: "cappuccino",
            image: require("../../../assets/images/cappuccino.png"),
            price: 12
        },
        {
            name: "Macciato",
            image: require("../../../assets/images/macciato.png"),
            price: 19
        },
        {
            name: "Mocha",
            image: require("../../../assets/images/mocha.png"),
            price: 16
        },
        {
            name: "Latte",
            image: require("../../../assets/images/latte.png"),
            price: 22
        },
    ]

    const findCoffeeByName = (name: string): Coffee[] => {
        return coffeeData.filter((coffee) =>
            coffee.name.toLowerCase().includes(name.toLowerCase())
        );
    };

    const result = findCoffeeByName(`${id}`);

    if (!result || !result[0]?.image) {
        return <Text>No image available</Text>;
    }

    const [count, setCount] = useState<number>(1);
    const [size, setSize] = useState(["S", "M", "L"]);
    const [currentSize, setCurrentSize] = useState("M")
    const [sugar, setSugar] = useState([
        {
            name: "No Sugar",
            image: require("../../../assets/images/sugar-1.png"),
        },
        {
            name: "Less Sugar",
            image: require("../../../assets/images/sugar-2.png"),
        },
        {
            name: "Normal Sugar",
            image: require("../../../assets/images/sugar-3.png"),
        },
        {
            name: "More Sugar",
            image: require("../../../assets/images/sugar-4.png"),
        },
    ]);
    const [currentSugar, setCurrentSugar] = useState("Normal Sugar")
    const [creame, setCreame] = useState(false)
    const [ice, setIce] = useState(false)
    const [price, setPrice] = useState<number>(result[0].price)

    const handledelete = () => {
        if (count >= 1) {
            setCount(count - 1)
            getQuantityPrice();
        }
    }

    useEffect(() => {
        getQuantityPrice();
    }, [count])

    const getQuantityPrice = () => {
        const total: number = result[0].price * count;
        setPrice(total)
    }


    return (
        <View style={styles.container} >
            <Stack.Screen options={{ headerTitle: `${id}` }} />
            <ImageBackground source={require('../../../assets/images/header.png')} style={styles.ImageContainer} >
                <Image source={result[0]?.image} style={styles.image} />
            </ImageBackground>
            <View style={styles.counterContainer} >
                <View>
                    <Text style={{ fontSize: 24, fontWeight: 600, textTransform: 'capitalize', color: "#BA826A" }}>{result[0].name}</Text>
                    <Text style={{ fontSize: 18, fontWeight: 600, textTransform: 'capitalize', color: 'grey' }}>${result[0].price}</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <Text>{count}</Text>
                    <TouchableOpacity onPress={() => {
                        if (count > 1) {
                            setCount(count - 1)
                        }
                    }} style={{ paddingHorizontal: 15, paddingVertical: 5, borderWidth: 1, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 600 }}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCount(count + 1)} style={{ paddingHorizontal: 15, paddingVertical: 5, borderWidth: 1, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 600 }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.counterContainer} >
                <Text style={{ fontSize: 18, fontWeight: 600, textTransform: 'capitalize' }}>Size</Text>
                <View style={styles.SizeContainer} >
                    {
                        size.map((size, key) => {
                            return (
                                <TouchableOpacity key={key} onPress={() => setCurrentSize(size)} style={[
                                    styles.sizeButton,
                                    { backgroundColor: currentSize === size ? '#BA826A' : 'white' }
                                ]}>
                                    <Text>{size}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
            <View style={styles.counterContainer} >
                <Text style={{ fontSize: 18, fontWeight: 600, textTransform: 'capitalize' }}>Sugar</Text>
                <View style={styles.SizeContainer} >
                    {
                        sugar.map((sugar, key) => {
                            return (
                                <TouchableOpacity key={key} onPress={() => setCurrentSugar(sugar.name)} style={[
                                    { padding: 22 },
                                    styles.sizeButton,
                                    { backgroundColor: currentSugar === sugar.name ? '#BA826A' : 'white' },
                                ]}>
                                    <Image source={sugar.image} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
            <View style={styles.counterContainer} >
                <Text style={{ fontSize: 18, fontWeight: 600, textTransform: 'capitalize' }}>Additional</Text>
                <View style={styles.SizeContainer} >
                    <TouchableOpacity style={[
                        { padding: 22 },
                        styles.sizeButton,
                        { backgroundColor: creame ? '#BA826A' : 'white' },
                    ]}
                        onPress={() => setCreame(!creame)}>
                        <Image source={require("../../../assets/images/creame.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[
                        { padding: 22 },
                        styles.sizeButton,
                        { backgroundColor: ice ? '#BA826A' : 'white' },
                    ]}
                        onPress={() => setIce(!ice)}>
                        <Image source={require("../../../assets/images/ice.png")} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.counterContainer} >
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 600, textTransform: 'capitalize' }}>Total</Text>
                    <Text style={{ fontSize: 18, fontWeight: 600, textTransform: 'capitalize', color: 'grey' }}>${price}</Text>
                </View>
                <View style={styles.SizeContainer} >
                    <TouchableOpacity style={styles.orderButton} >
                        <Link href='/successfull'>
                            <Text style={{ fontSize: 18, fontWeight: 600, color: 'white' }}>Order</Text>
                        </Link>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CoffeeDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: 'column',
    },
    ImageContainer: {
        width: "100%",
        height: 250,
        alignItems: 'center',
        justifyContent: "center",
        borderBottomColor: "rgba(0,0,0,0.1)",
        borderBottomWidth: 1,
    },
    image: {
        transform: 'scale(1.5)'
    },
    counterContainer: {
        width: '100%',
        height: 80,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 20
    },
    SizeContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    sizeButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        borderRadius: 30,
        // backgroundColor: '#BA826A50'
    },
    orderButton: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#BA826A'
    }
})