import React from "react";
import { View, Text } from 'react-native'
import styles from "./styles";

const Board = (props) => {

    return <View style={styles.container}>
        <View style={styles.headerRectangle}>
            <Text style={styles.boardHeader}>{props.name}</Text>
        </View>
        <View style={styles.rectangle}>
            <Text style={styles.label}>DIFFICULTY      :</Text>
            <Text style={styles.text}>{props.level}</Text>
        </View>
        <View style={styles.rectangle}>
        <Text style={styles.label}>HEALTH           :</Text>
            <Text style={styles.text}>{props.health}</Text>
        </View>
        <View style={styles.rectangle}>
        <Text style={styles.label}>RECOVERY       :</Text>

            <Text style={styles.text}>{props.recovery}</Text>
        </View>
        <View style={styles.rectangle}>
        <Text style={styles.label}>ATTACK           :</Text>

            <Text style={styles.text}>{props.attack}</Text>
        </View>
        <View style={styles.rectangle}>
        <Text style={styles.label}>TOUGHNESS   :</Text>

            <Text style={styles.text}>{props.toughness}</Text>
        </View>
        <View style={styles.rectangle}>
        <Text style={styles.label}>POWERGEN    :</Text>

            <Text style={styles.text}>{props.powergen}</Text>
        </View>

    </View>
}

export default Board;