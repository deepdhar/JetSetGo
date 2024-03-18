import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>

            <Image
                style={styles.mainImage}
                source={require('../assets/images/airplane1.png')}
            />

            <View style={styles.headerTextContainer}>
                {/* <Text style={[styles.headerText,{marginVertical: 25, fontSize: 40, color: '#e32222', fontWeight: '900'}]}>Jet Set Go!</Text> */}
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.headerText}>Let's</Text>
                    <Text style={[styles.headerText, {color: '#e32222'}]}> Start</Text>
                </View>
                <Text style={styles.headerText}>A Trip With</Text>
                <Text style={styles.headerText}>Us...</Text>

                <Text style={{color: '#969393', marginVertical: 30, fontSize: 16, }}>
                    The application will help you find the best flight tickets to various destinations!
                </Text>
            </View>

            <Pressable onPress={()=>navigation.navigate('FindFlightScreen')} style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2f2fa',
    },
    mainImage: {
        height: 200,
        width: 400,
        position: 'absolute',
        top: 60,
        right: 20,
        resizeMode: 'contain'
    },
    button: {
        backgroundColor: '#000000',
        padding: 20,
        borderRadius: 15,
        marginTop: 'auto',
        marginHorizontal: 18,
        marginBottom: 30,
        alignItems: 'center'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16
    },
    headerTextContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginHorizontal: 25,
        marginBottom: 20
    },
    headerText: {
        color: '#000000',
        fontSize: 50,
        fontWeight: '700'
    }
})