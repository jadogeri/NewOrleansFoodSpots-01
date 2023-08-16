import React from "react";
import {StyleSheet, Text, View, Button} from "react-native"

const ImageScreen = (props) => {

    return<View>
        <Text style={styles.homeScreen}>This is image screen</Text>
      <Button onPress={()=>{props.navigation.navigate("About")}}
              title="About"   />
      <Button onPress={()=>{props.navigation.navigate("Detail")}}
              title="Detail"   />   
     </View>
}

const styles = StyleSheet.create({

    homeScreen:{
        fontSize:100
    }
})

export default ImageScreen;