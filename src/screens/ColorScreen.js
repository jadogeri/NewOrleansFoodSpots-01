import React from "react";
import { useState } from "react";
import {Text, View, Button, StyleSheet, FlatList,TouchableOpacity} from "react-native";

const ColorScreen = () =>{

    const [colors,setColor] = useState([]);
    return(
        <View>
        <View style={{flexWrap:"wrap",}}>
            <Text>This is the color screen</Text>
            <TouchableOpacity style={{color:'red'}} title="Press for new Color" 
                    onPress={() =>{
                        setColor( [...colors,randomrgb()]);
                    }}>
            </TouchableOpacity>
            <FlatList 
            data={colors}
            keyExtractor={(color)=>{return color}}
            renderItem={({item})=>{
                return <div>
                <View style={{margin:100,flexWrap:"wrap",height:100, width:100 ,backgroundColor:item}}>

                </View>
                </div>
            }}
            />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({

    square:{
        height:100,
        width:100,        
    }
})

const randomrgb = ()=>{

    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    let colorString = `rgb(${red},${blue},${green})`;

    return colorString;

    
}

export default ColorScreen;