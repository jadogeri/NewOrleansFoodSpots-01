import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles"
import {Entypo} from "react-native-vector-icons"
const SearchBar = () => {

    
    return<View style={styles.background}>
        <Entypo name="magnifying-glass" style={styles.magnifyingGlass}/>
         <TextInput style={styles.textInput} placeholder="Search"/>
         </View>
}

export default SearchBar;