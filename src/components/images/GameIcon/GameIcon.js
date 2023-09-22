import React from "react";
import { View, Text, Image } from 'react-native';
import styles from "./styles";

const GameIcon = (props) => {
    return <View style={styles.container}>
        <Image style={styles.image}
            source={require('../../../../assets/mortal_kombat_logo.gif')} />
    </View>
}

export default GameIcon;