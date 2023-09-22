import React from "react"
import {View, Text,Image, TouchableOpacity} from 'react-native'
import styles from "./styles"

const ControllerButton = (props) =>{

    return <View>
        <TouchableOpacity onPress={props.buttonHandler}>
        <Image style={styles.image} source={props.source}/>
        <Text style={styles.text} >{props.text}</Text>
        </TouchableOpacity>
       
    </View>
}


export default ControllerButton;