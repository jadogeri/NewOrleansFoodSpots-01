import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native"
import SearchBar from "../../components/SearchBar/SearchBar"
import useResults from "../../hooks/useResults";
import ResultsList from "../../components/ResultList/ResultsList";

const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {

        let myfilteredarray = results.filter((result) => {
            return result.price === price;
        })

        return myfilteredarray;

    }

    console.log(results);
    ;

    return <ScrollView>

        <SearchBar searchTerm={searchTerm}
            onTermChange={(newTerm) => { setSearchTerm(newTerm) }}
            onSearchTermSubmit={() => searchApi(searchTerm)} />
        {errorMessage ? <Text>{errorMessage} </Text> : null}
        <Text>the number of items in array are {results.length}</Text>
        <ResultsList results={filterResultsByPrice('$')} headerText="Budget Options" />
        <ResultsList results={filterResultsByPrice('$$')} headerText="Kinda Pricey" />
        <ResultsList results={filterResultsByPrice('$$$')} headerText="$$$  wowza $$$" />



    </ScrollView>
}



export default SearchScreen;