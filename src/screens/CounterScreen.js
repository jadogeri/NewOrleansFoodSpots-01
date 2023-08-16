import { useState } from "react";
import React from "react";
import { Text, StyleSheet, View,Button } from "react-native";

const CounterScreen = () => {

   const  [count,setCounter] = useState(0);

    return (
        <View>
            <Text> I am the counter screen</Text>
            <Button title="INCREASE" onPress={()=>{setCounter(count + 1)}}></Button>
            <Button title="DECREASE" onPress={()=>{setCounter(count - 1)}}></Button>
            <Text style={{alignSelf:"center",marginTop:50,fontSize:50,fontWeight:"bold"}}>count</Text>
            <Text style={{alignSelf:"center",marginTop:50,fontSize:50,fontWeight:"bold"}}>{count}</Text>

        </View>
    )
}

const styles = StyleSheet.create({


});

export default CounterScreen;