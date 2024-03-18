import { Pressable, ScrollView, StyleSheet, Text, View, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'


export default function BookTicketScreen({route}) {
    const navigation = useNavigation();

    const {departure} = route.params;
    const {arrival} = route.params;
    const {passengers} = route.params;
    const from = departure.toLowerCase().trim();
    const to = arrival.toLowerCase().trim();
    const noOfPassengers = passengers;

    const [flightData, setFlightData] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const [flightFilter, setFlightFilter] = useState('')
    const [priceFilter, setPriceFilter] = useState(0)

    useEffect(() => {
        getFlightDetailsFromApi()
    },[])

    const getFlightDetailsFromApi = async () => {
        try {
            const response = await fetch('https://api.npoint.io/378e02e8e732bb1ac55b');
            const json = await response.json();
            setFlightData(json)
        } catch (error) {
            console.error(error);
        }
    };

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

    function getFlightDuration(time) {
        var hours = (time[0] + time[1])
        var minutes = (time[7] + time[8] + time[9])

        // hours = hours.trim()
        // minutes.trim()
        var formatted = hours + " hr " + minutes + " m"

        return formatted;
    }

    function selectCategory(airline) {
        setFlightFilter(airline)
        setPriceFilter(0)
        setShowModal(false)
    }

    function selectPrice(price) {
        setPriceFilter(price)
        setFlightData('')
        setShowModal(false)
    }

    function clearFilters() {
        setFlightFilter('')
        setPriceFilter(0)
        setShowModal(false)
    }

    return (
        <LinearGradient colors={['#f2f2fa', '#f2f2fa', '#5c42d4']} style={styles.mainContainer}>

            {/* Sort Flights */}
            <Modal transparent={true} visible={showModal}>
                <View style={styles.modalView}>
                    <View style={{backgroundColor: '#5c42d4', flex: 1, justifyContent: 'center',  borderRadius: 15}}>
                        <View style={styles.modalCategoryView}>

                            {/* Airline Filter */}
                            <View style={{justifyContent: 'flex-start'}}>
                                <Text style={styles.modalHeaderText}>Sort by Airline</Text>
                                <View style={{flexDirection: 'row'}}>
                                    {/* Indigo */}
                                    <Pressable onPress={()=>selectCategory('IndiGo')} style={{backgroundColor: '#000000', justifyContent: 'center', alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 8, marginVertical: 10, borderRadius: 12, marginHorizontal: 5}}>
                                        <Text style={{color: '#fff'}}>IndiGo</Text>
                                    </Pressable>
                                    {/* Air India */}
                                    <Pressable onPress={()=>selectCategory('Air India')} style={{backgroundColor: '#000000', justifyContent: 'center', alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 8, marginVertical: 10, borderRadius: 12, marginHorizontal: 5}}>
                                        <Text style={{color: '#fff'}}>Air India</Text>
                                    </Pressable>
                                    {/* SpiceJet */}
                                    <Pressable onPress={()=>selectCategory('SpiceJet')} style={{backgroundColor: '#000000', justifyContent: 'center', alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 8, marginVertical: 10, borderRadius: 12, marginHorizontal: 5}}>
                                        <Text style={{color: '#fff'}}>SpiceJet</Text>
                                    </Pressable>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    {/* Vistara */}
                                    <Pressable onPress={()=>selectCategory('Vistara')} style={{backgroundColor: '#000000', justifyContent: 'center', alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 8, marginVertical: 10, borderRadius: 12, marginHorizontal: 5}}>
                                        <Text style={{color: '#fff'}}>Vistara</Text>
                                    </Pressable>
                                    {/* GoAir */}
                                    <Pressable onPress={()=>selectCategory('GoAir')} style={{backgroundColor: '#000000', justifyContent: 'center', alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 8, marginVertical: 10, borderRadius: 12, marginHorizontal: 5}}>
                                        <Text style={{color: '#fff'}}>GoAir</Text>
                                    </Pressable>
                                    {/* AirAsia */}
                                    <Pressable onPress={()=>selectCategory('AirAsia')} style={{backgroundColor: '#000000', justifyContent: 'center', alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 8, marginVertical: 10, borderRadius: 12, marginHorizontal: 5}}>
                                        <Text style={{color: '#fff'}}>AirAsia</Text>
                                    </Pressable>
                                </View>
                            </View>

                            {/* dividing line */}
                            <View style={{ borderBottomColor: '#969393', borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 12}} />

                            {/* Price Filter */}
                            <View style={{justifyContent: 'flex-start'}}>
                                <Text style={styles.modalHeaderText}>Sort by Price</Text>
                                <View style={{flexDirection: 'row'}}>
                                    {/* 4500-5000 */}
                                    <Pressable onPress={()=>clearFilters()} style={{backgroundColor: '#000000', justifyContent: 'center', alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 8, marginVertical: 10, borderRadius: 12, marginRight: 5}}>
                                        <Text style={{color: '#fff'}}>4500-5000</Text>
                                    </Pressable>
                                    {/* 5000-5500 */}
                                    <Pressable onPress={()=>clearFilters()} style={{backgroundColor: '#000000', justifyContent: 'center', alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 8, marginVertical: 10, borderRadius: 12, marginRight: 5}}>
                                        <Text style={{color: '#fff'}}>5000-5500</Text>
                                    </Pressable>
                                    {/* 5500-6000 */}
                                    <Pressable onPress={()=>clearFilters()} style={{backgroundColor: '#000000', justifyContent: 'center', alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 8, marginVertical: 10, borderRadius: 12, marginRight: 5}}>
                                        <Text style={{color: '#fff'}}>5500-6000</Text>
                                    </Pressable>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    {/* 6000-6500 */}
                                    <Pressable onPress={()=>clearFilters()} style={{backgroundColor: '#000000', justifyContent: 'center', alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 8, marginVertical: 10, borderRadius: 12, marginRight: 5}}>
                                        <Text style={{color: '#fff'}}>6000-6500</Text>
                                    </Pressable>
                                    {/* 6500-7000 */}
                                    <Pressable onPress={()=>clearFilters()} style={{backgroundColor: '#000000', justifyContent: 'center', alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 8, marginVertical: 10, borderRadius: 12, marginRight: 5}}>
                                        <Text style={{color: '#fff'}}>6500-7000</Text>
                                    </Pressable>
                                    {/* 7000-7500 */}
                                    <Pressable onPress={()=>clearFilters()} style={{backgroundColor: '#000000', justifyContent: 'center', alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 8, marginVertical: 10, borderRadius: 12, marginRight: 5}}>
                                        <Text style={{color: '#fff'}}>7000-7500</Text>
                                    </Pressable>
                                </View>
                            </View>

                        </View>
                        <Pressable
                            onPress={()=>clearFilters()}
                            style={{backgroundColor: '#fff', alignSelf: 'center',paddingHorizontal: 30, paddingVertical: 8, position: 'absolute', bottom: 0, marginBottom: 18, borderRadius: 8}}
                        >
                            <Text style={{color: '#000', fontWeight: '600', fontSize: 15}}>Clear filters</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            
            <View style={{flexDirection: 'row', marginVertical: 15, width: '100%',  alignItems: 'center'}}>
                <Pressable onPress={()=>navigation.goBack()} >
                    <Ionicons name="chevron-back" color='#000000' size={25}  />
                </Pressable>
                <Text style={styles.headerText}>Available Flights</Text>
                <Pressable 
                    onPress={()=>setShowModal(true)}
                    style={{position: 'absolute', right: 0, backgroundColor: '#5c42d4', justifyContent: 'center', alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 8, borderRadius: 35}}
                >   
                    <Text style={{fontWeight: '500', color: '#ffffff', alignSelf: 'center', fontSize: 12}}>Sort Flights</Text>
                </Pressable>
            </View>

            {/* Departure from and arrival to */}
            <View style={{flexDirection: 'row', marginTop: 18, justifyContent: 'space-between'}}>
                <View style={{alignItems: 'flex-start'}}>
                    <Text style={{color: '#969393', fontSize: 14, }}>Departure From</Text>
                    <Text style={{color: '#000000', fontSize: 22, marginTop: 0, fontWeight: 'bold'}}>{from}</Text>
                </View>
                
                <View style={{alignItems: 'flex-end'}}>
                    <Text style={{color: '#969393', fontSize: 14, }}>Arrival To</Text>
                    <Text style={{color: '#000000', fontSize: 22, marginTop: 0, fontWeight: 'bold'}}>{to}</Text>
                </View>
            </View>

            {/* Date */}
            <View style={{flexDirection: 'row', backgroundColor: '#000000', width: 100, justifyContent: 'center', elevation: 5, alignSelf: 'center', paddingVertical: 8, marginVertical: 10, borderRadius: 35}}>
                <Text style={{color: '#ffffff', fontWeight: '500', fontSize: 15,}}>Fri Mar 15</Text>
            </View>

            {/* ticket View */}
            <ScrollView horizontal={false}>
                {/* <TicketCard/> */}
                <View>
                    {flightData.map((flight) => {
                        return (
                            <View key={flight.id} >
                                {flight.origin.toLowerCase()===from && flight.destination.toLowerCase()===to && (flightFilter===flight.airline || flightFilter==='') ?
                                    <View style={styles.ticketCardView}>
                                        {/* flight name and class */}
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <View>
                                                <Text style={{color: '#000000', fontWeight: '700', fontSize: 14}}>{flight.airline}</Text>
                                                <Text style={{color: '#969393', fontWeight: '500', fontSize: 12}}>{flight.flightNumber}</Text>
                                            </View>

                                            <View style={{alignItems: 'flex-end'}}>
                                                <Text style={{color: '#000000', fontWeight: '700', fontSize: 14,}}>{getFlightDuration(flight.duration)}</Text>
                                                <Text style={{color: '#969393', fontWeight: '500', fontSize: 12}}>Duration of Journey</Text>
                                            </View>
                                        </View>

                                        {/* dividing line */}
                                        <View style={{ borderBottomColor: '#969393', borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 12}} />
                                        
                                        {/* depart and arrive time */}
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 18}}>
                                            <View style={{alignItems: 'center'}}>
                                                <Text style={{color: '#000000', fontWeight: '800', fontSize: 18}}>{getTime(flight.departureTime)}</Text>
                                                <Text style={{color: '#969393', fontWeight: '500', fontSize: 12}}>Depart</Text>
                                            </View>

                                            <Ionicons name="airplane" color='#000000' size={20}/>

                                            <View style={{alignItems: 'center'}}>
                                                <Text style={{color: '#000000', fontWeight: '800', fontSize: 18}}>{getTime(flight.arrivalTime)}</Text>
                                                <Text style={{color: '#969393', fontWeight: '500', fontSize: 12}}>Arrive</Text>
                                            </View>
                                        </View>

                                        {/* dashed dividing line */}
                                        <View style={{ borderStyle: 'dashed', borderBottomColor: '#969393', borderBottomWidth: 1, }} />

                                        {/* ticket price and book button */}
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 18,}}>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <Text style={{color: '#000000', fontWeight: '800', fontSize: 14, marginRight: 5}}>Rs.{flight.price}</Text>
                                                <Text style={{color: '#969393', fontWeight: '500', fontSize: 12}}>Seats available:{flight.seatsAvailable}</Text>
                                            </View>

                                            <Pressable onPress={()=>navigation.navigate('TicketScreen',{flightData: flight})}>
                                                <Text style={{color: '#5c42d4', fontSize: 14, fontWeight: '800'}}>Book Now</Text>
                                            </Pressable>
                                        </View>
                                    </View> : 
                                    
                                    <View>
                                    </View>
                                }

                            </View>
                        )
                    })}
                </View>
            </ScrollView>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    modalView: {
        height: 400,
        marginHorizontal: 18,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 200,
        elevation: 5,
        borderRadius: 15
    },
    modalCategoryView: {
        backgroundColor: '#ffffff', 
        flex: 1, 
        marginHorizontal: 18, 
        marginTop: 18, 
        marginBottom: 70, 
        justifyContent: 'space-between', 
        padding: 15,
        borderRadius: 12
    },
    modalHeaderText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '500'
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 18,
        paddingTop: 18
    },
    headerText: {
        color: '#000000',
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 10
    },
    ticketCardView: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: 200,
        paddingHorizontal: 15,
        paddingVertical: 18,
        borderRadius: 12,
        marginTop: 10,
        marginBottom: 10,
    }
})