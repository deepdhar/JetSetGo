import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function TicketScreen({route}) {
    const navigation = useNavigation();

    const {flightData} = route.params;
    const flight = flightData;

    function getTime(timestamp) {
        
        var hours = timestamp[11] + timestamp[12];
        var minutes = timestamp[14] + timestamp[15];
        console.log(hours)
        console.log(minutes)
        var amOrPm = "AM"
        if(hours>12) {
            hours = hours - 12;
            amOrPm = "PM"
        }

        var formatted = hours + ":" + minutes + " " + amOrPm;

        return formatted;
    }

    return (
        <View style={styles.mainContainer}>
            <View style={{height: 200, backgroundColor: '#5c42d4',}}/>

            {/* master view */}
            <View style={{flex: 1, position: 'absolute', padding: 15, left: 0, right: 0, top: 0, bottom: 0}}>
                {/* headers */}
                <View style={{flexDirection: 'row', marginVertical: 15, width: '100%',  justifyContent: 'center'}}>
                    <Pressable onPress={()=>navigation.goBack()} style={{position: 'absolute', left: 0, justifyContent: 'center'}} >
                        <Ionicons name="chevron-back" color='#ffffff' size={25}  />
                    </Pressable>
                    <Text style={styles.headerText}>Boarding Pass</Text>
                </View>

                <View style={styles.boardingPass}>
                    {/* upper portion */}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row' }}>
                            <View style={{alignItems: 'center'}}>
                                <Text style={{color: '#969393', fontSize: 12}}>Flight</Text>
                                <Text style={{color: '#000', fontSize: 14, fontWeight: '500'}}>{flight.flightNumber}</Text>
                            </View>

                            <View style={{marginLeft: 10, alignItems: 'center'}}>
                                <Text style={{color: '#969393', fontSize: 12}}>Gate</Text>
                                <Text style={{color: '#000', fontSize: 14, fontWeight: '500'}}>{flight.gate}</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <Text style={{color: '#969393', fontWeight: '500'}}>{flight.airline}</Text>
                            <Text style={{color: '#000', fontSize: 12, fontWeight: '600'}}>{flight.aircraft}</Text>
                        </View>
                    </View>


                    {/* middle portion */}
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 18, alignItems: 'center'}}>
                        <Text style={{color: '#969393', fontWeight: '700', fontSize: 25, marginRight: 5}}>{flight.origin}</Text>

                        <Ionicons name="airplane" color='#000000' size={20}/>

                        <Text style={{color: '#969393', fontWeight: '700', fontSize: 25, marginLeft: 5}}>{flight.destination}</Text>
                    </View>

                    {/* depart and arrive time */}
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 18}}>
                        <View style={{alignItems: 'center'}}>
                            <Text style={{color: '#969393', fontWeight: '500', fontSize: 12}}>Departure</Text>
                            <Text style={{color: '#000000', fontWeight: '800', fontSize: 18}}>{getTime(flight.departureTime)}</Text>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <Text style={{color: '#969393', fontWeight: '500', fontSize: 12}}>Arrival</Text>
                            <Text style={{color: '#000000', fontWeight: '800', fontSize: 18}}>{getTime(flight.arrivalTime)}</Text>
                        </View>
                    </View>

                    <Text style={{color: '#969393', fontWeight: '500', fontSize: 14, alignSelf: 'center', marginVertical: 18}}>{flight.duration} travel time</Text>
                
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 18}}>
                        <View style={{backgroundColor: '#e0dede', width: 120, height: 50, borderRadius: 5, padding: 10}}>
                            <Text style={{color: '#969393', fontWeight: '500', fontSize: 12,}}>Seat</Text>
                            <Text style={{color: '#000', fontWeight: '500', fontSize: 12,}}>24 A</Text>
                        </View>
                        <View style={{backgroundColor: '#e0dede', width: 120, height: 50, borderRadius: 5, padding: 10}}>
                            <Text style={{color: '#969393', fontWeight: '500', fontSize: 12,}}>Class</Text>
                            <Text style={{color: '#000', fontWeight: '500', fontSize: 12,}}>Economy</Text>
                        </View>
                    </View>

                    {/* dashed dividing line */}
                    <View style={{ borderStyle: 'dashed', borderBottomColor: '#969393', borderBottomWidth: 1, marginVertical: 10}} />

                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
                        <Text style={{color: '#000', fontWeight: '500', fontSize: 14,}}>Download Ticket</Text>
                        <Pressable 
                            onPress={()=>Alert.alert('Downloaded','Ticket downloaded successfully!', [
                                {
                                    text: 'OK', onPress: ()=> console.log("OK Pressed")
                                }
                            ])} 
                            style={{marginLeft: 5}}
                        >
                            <Ionicons name="download-outline" color='#000000' size={18}/>
                        </Pressable>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2f2fa'
    },
    headerText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 10,
        alignItems: 'center'
    },
    boardingPass: {
        marginHorizontal: 12,
        backgroundColor: '#fff',
        height: 400,
        borderRadius: 10,
        elevation: 5,
        padding: 18,
        marginTop: 20
    }
})