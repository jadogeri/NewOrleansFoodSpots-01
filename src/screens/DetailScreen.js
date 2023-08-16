import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native"

const teams = [{ id: '0', name: "manchester united" },
{ id: '1', 'name': "manchester city" },
{ id: "2", 'name': "Liverpool" },
{ id: '3', 'name': "Chelsea" },
{ id: '4', 'name': "Arsenal" },
{ id: '5', 'name': "Tottenham" },
{ id: '6', 'name': "Newcastle" },
{ id: '7', 'name': "Newcastle" },
{ id: '8', 'name': "Newcastle" }



]


const DetailScreen = (props) => {

    return <View>
        <Text>This is the DetailScreen</Text>
        <Text>This is the Testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt</Text>

         <h1>HELLO WORLD</h1>


        <FlatList
            data={teams}
            renderItem={({ item }) => {
                return (
                    <Text >{item.name}</Text>
                )
            }}
            keyExtractor={(team) => { return team.id }}
        />


    </View>
}



export default DetailScreen;