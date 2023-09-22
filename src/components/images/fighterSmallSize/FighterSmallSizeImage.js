import React from "react";
import { View, Text, TouchableOpacity,Image } from 'react-native'
import styles from "./styles";

const FighterIcon = (props) => {

    return <View style={props.borderStyle}>
        
            <Image style={styles.image}
                    source={props.source}
                    />
    </View>
}

export default FighterIcon;