import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'


export default function FindFlightScreen() {
    const navigation = useNavigation();

    const [fromSearchTerm, setFromSearchTerm] = useState('')
    const [toSearchTerm, setToSearchTerm] = useState('')
    const [passenger, setPassenger] = useState(1)
    const [isSingularPassenger, setIsSingularPassenger] = useState('passenger')

    useEffect(() => {
        if(passenger>1) {
            setIsSingularPassenger('passengers')
        } else {
            setIsSingularPassenger('passenger')
        }
    },[addPassenger, subtractPassenger])


    function addPassenger() {
        if(passenger==10) return
        setPassenger(passenger+1)
    }

    function subtractPassenger() {
        if(passenger==1) return
        else {
            setPassenger(passenger-1)
        }
    }

    function navigateToBookingScreen() {
        if(fromSearchTerm==='' || toSearchTerm==='') {
            Alert.alert('Alert','Kindly enter departure and arrival airports before finding your flights!', [
                {
                    text: 'OK', onPress: ()=> console.log("OK Pressed")
                }
            ])
        } else {
            navigation.navigate('BookTicketScreen',{departure: fromSearchTerm, arrival: toSearchTerm, passengers: passenger})
        }
    }

    return (
        <View style={styles.mainContainer}>

            <View style={{flexDirection: 'row',}}>
                <Pressable
                    onPress={()=>navigation.goBack()}
                    style={{marginLeft: 18, marginTop: 20, borderColor: '#ffffff', borderWidth: 1, borderRadius: 360, height: 32, width: 32, justifyContent: 'center',}}
                >
                    <Ionicons name="chevron-back" color='#ffffff' size={25} />
                </Pressable>

                <Pressable style={{marginLeft: 'auto', marginTop: 20, marginRight: 18, borderColor: '#ffffff', borderWidth: 1, borderRadius: 360, height: 32, width: 32, justifyContent: 'center', alignItems: 'center'}}>
                    <Entypo name="dots-three-horizontal" color='#ffffff' size={20} />
                </Pressable>
            </View>
            
            <View style={styles.innerContainer}>
                {/* from and to */}
                <View>
                    <View style={styles.from}>
                        <Text style={{color: '#969393', fontSize: 14, marginLeft: 5}}>From</Text>
                        <TextInput
                            value={fromSearchTerm}
                            onChangeText={setFromSearchTerm}
                            style={styles.searchInput}
                            placeholder='Enter here...'
                            placeholderTextColor='gray'
                        />
                    </View>

                    <View style={styles.to}>
                        <Text style={{color: '#969393', fontSize: 14, marginLeft: 5}}>To</Text>
                        <TextInput
                            value={toSearchTerm}
                            onChangeText={setToSearchTerm}
                            style={styles.searchInput}
                            placeholder='Enter here...'
                            placeholderTextColor='gray'
                        />
                    </View>
                </View>

                {/* passengers */}
                <View style={styles.box}>
                    <Text style={{color: '#969393', fontSize: 14, marginLeft: 5}}>Passengers</Text>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={{color: '#000000', marginLeft: 5, fontSize: 18, marginTop: 5, fontWeight: 'bold'}}>
                            {passenger}
                        </Text>
                        <Text style={{color: '#000000', marginLeft: 5, fontSize: 18, marginTop: 5, fontWeight: 'bold'}}>
                            {isSingularPassenger}
                        </Text>
                        
                        <Pressable onPress={()=>subtractPassenger()} style={{marginLeft: 'auto'}} >
                            <Entypo name="circle-with-minus" color='#969393' size={28} />
                        </Pressable>
                        <Pressable onPress={()=>addPassenger()} >
                            <MaterialIcons name="add-circle" color='#969393' size={28} style={{marginLeft: 10, marginEnd: 10}}/>
                        </Pressable>
                    </View>
                </View>

                {/* departure date */}
                <View style={styles.box}>
                    <Text style={{color: '#969393', fontSize: 14, marginLeft: 5}}>Departure Date</Text>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={{color: '#000000', marginLeft: 5, fontSize: 18, marginTop: 5, fontWeight: 'bold'}}>
                            Fri, Mar 15 2024
                        </Text>
                        <Pressable style={{marginLeft: 'auto', marginEnd: 10}}>
                            <MaterialCommunityIcons name="calendar-month-outline" color='#969393' size={28} />
                        </Pressable>
                    </View>
                </View>

                {/* return date */}
                <View style={styles.box}>
                    <Text style={{color: '#969393', fontSize: 14, marginLeft: 5}}>Return Date</Text>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={{color: '#000000', marginLeft: 5, fontSize: 18, marginTop: 5, fontWeight: 'bold'}}>
                            Sun, Mar 17 2024
                        </Text>
                        <Pressable style={{marginLeft: 'auto', marginEnd: 10}}>
                            <MaterialCommunityIcons name="calendar-month-outline" color='#969393' size={28} />
                        </Pressable>
                    </View>
                </View>


                <Pressable onPress={()=>navigateToBookingScreen()} style={styles.button}>
                    <Text style={styles.buttonText}>Find Your Flights</Text>
                </Pressable>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#5c42d4',
    },
    innerContainer: {
        flex: 1, 
        backgroundColor: '#f2f2fa', 
        paddingHorizontal: 15,
        paddingTop: 50, 
        marginTop: 30, 
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    from: {
        width: '100%',
        height: 85,
        color: 'black',
        padding: 12,
        borderColor: '#969393',
        borderWidth: 0.5,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
    },
    to: {
        width: '100%',
        height: 85,
        color: 'black',
        padding: 12,
        borderTopColor: '#ffffff',
        borderLeftColor: '#969393',
        borderRightColor: '#969393',
        borderBottomColor: '#969393',
        borderWidth: 0.5,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12
    },
    searchInput: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    box: {
        width: '100%',
        height: 85,
        color: 'black',
        padding: 12,
        borderColor: '#969393',
        borderWidth: 0.5,
        borderRadius: 12,
        marginTop: 12
    },
    button: {
        backgroundColor: '#5c42d4',
        padding: 20,
        borderRadius: 12,
        marginTop: 'auto',
        marginBottom: 30,
        alignItems: 'center'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    },
})