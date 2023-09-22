import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from "./styles"

const StartGameButton = (props) => {

    return <View style={styles.container}>

        <TouchableOpacity onPress={() => { props.navigation.navigate('Mode')}}>
            <Image style={styles.image} source={require('../../../../assets/fire_logo.jpg')} />
            <View style={styles.text_container}>
            <Text style={styles.text}>START FIGHT</Text>
            </View>
        </TouchableOpacity>

    </View>
}

export default StartGameButton;