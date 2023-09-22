import React from "react";
import styles from "../scoreboard/styles";
import { Text,  View, } from "react-native";

const StatusBoard = (props) => {
  // printing out props to the command line
  return <View >

    <Text style={styles.dimensions}> {props.textOnScreen}

    </Text>

  </View>

};

export default  StatusBoard;