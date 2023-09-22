import React from "react";
import { View, Text, TouchableOpacity,Image } from 'react-native'
import styles from "./styles";

const FighterFullSizeImage = (props) => {

    return <View style={props.borderStyle}>
        
            <Image style={styles.image}
                    source={props.source}
                    />
    </View>
}

export default FighterFullSizeImage;