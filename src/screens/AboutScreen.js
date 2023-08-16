import React from "react";
import {StyleSheet, Text, View, Button} from "react-native"

const AboutScreen = (props) => {

    return<View>
        <Text>This is the AboutScreen</Text>
        <Text>Home Screen </Text>
      <Button onPress={()=>{props.navigation.navigate("Home")}}
              title="Home"   />
      <Button onPress={()=>{props.navigation.navigate("Detail")}}
              title="Detail"   />    </View>
}

export default AboutScreen;