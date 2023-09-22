import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styles from './styles'

const AbilityLevelButtons = (props) => {


    return <View style={styles.container}>
        <TouchableOpacity onPress={props.decrease}  >
            <Image style={styles.button1} source={require('../../../../assets/buttons/decreaseButton.png')} />
        </TouchableOpacity>

        <ImageBackground style={styles.image} source={props.source}>
            <View style={styles.value_container}>
            <Text style={styles.value}>{props.value}</Text>
            </View>
        </ImageBackground>
        <TouchableOpacity onPress={props.increase} >
            <Image style={styles.button2} source={require('../../../../assets/buttons/increaseButton.png')} />

        </TouchableOpacity>

    </View>

};


export default AbilityLevelButtons;