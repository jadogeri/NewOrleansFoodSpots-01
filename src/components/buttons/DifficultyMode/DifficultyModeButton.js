import React from "react";
import { View, Text, TouchableOpacity,Image } from 'react-native'
import styles from "./styles";

const DifficultyModeButton = (props) => {

    return <View style={props.borderStyle}>
        <TouchableOpacity style={styles.container}
            onPress={props.handler}
        >
            <Image style={styles.image}
                    source={props.source}
                    />

        </TouchableOpacity>

    </View>
}

export default DifficultyModeButton;