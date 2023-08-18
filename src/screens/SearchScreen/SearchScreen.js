import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native"
import SearchBar from "../../components/SearchBar/SearchBar"
import useResults from "../../hooks/useResults";



const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi,results,errorMessage] = useResults();
    
    return <View>

        <SearchBar searchTerm={searchTerm}
            onTermChange={(newTerm) => { setSearchTerm(newTerm) }}
            onSearchTermSubmit={() => searchApi(searchTerm)} />
        {errorMessage ? <Text>{errorMessage} </Text> : null}
        <Text>the number of items in array are {results.length}</Text>

    </View>
}



export default SearchScreen;