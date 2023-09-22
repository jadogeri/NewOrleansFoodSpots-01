import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import styles from "./styles";

const NavButton = (props) =>{
    return <View style={styles.container}> 
        <TouchableOpacity style={styles.button}
                          onPress={props.nav}>
            <Text>{props.text}</Text>
        </TouchableOpacity>

    </View>
}

export default NavButton;