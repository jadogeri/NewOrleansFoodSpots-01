import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native"
import SearchBar from "../../components/SearchBar/SearchBar"
import yelp from "../../api/yelp"



const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search')
            setResults(response.data.businesses)
            setErrorMessage('')
        } catch (e) {
            console.log('something went wrong')
            console.log('e')

            setErrorMessage('something went wrong\n' +e.message)
        }

    }

    useEffect(() => {
        searchApi('chicken')
    }, [{}])
    return <View>

        <SearchBar searchTerm={searchTerm}
            onTermChange={(newTerm) => { setSearchTerm(newTerm) }}
            onSearchTermSubmit={() => searchApi(searchTerm)} />
        {errorMessage ? <Text>{errorMessage} </Text> : null}
        <Text>the number of items in array are {results.toString()}</Text>

    </View>
}



export default SearchScreen;