import React from "react";
import {StyleSheet, Text, View, Button} from "react-native"
import SearchBar from "../../components/SearchBar/SearchBar"

const SearchScreen = (props) => {

    return<View>

        <Text>This is the SearchScreen</Text>
        <SearchBar/>
        {/** <Text>Home Screen </Text>
      <Button onPress={()=>{props.navigation.navigate("Home")}}
              title="Home"   />
      <Button onPress={()=>{props.navigation.navigate("Detail")}}
              title="Detail"   />    
             * / */}
             </View> 
}



export default SearchScreen;