import React, {useState, useEffect} from "react";
import {View, Text, FlatList, Image} from "react-native"
import styles from "./styles"
import yelp from "../../api/yelp"

const ResultsShowScreen = (props)=>{
    const [result,setResult] = useState(null);
    const id = props.navigation.getParam('id');
    console.log(id);

    const getResult = async (id) => {
       const response =  await yelp.get(`/${id}`)
       setResult(response.data);
    }

    useEffect(()=> {getResult(id)}, [])
    if(!result){
        return null;
    }
    return <View>
        <Text>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) =>{return photo}}
            renderItem={({item})=>{
                return <Image  style={{width:300,height:200}} source={{uri : item}} />
            }}
        
        />
    </View>

}

export default ResultsShowScreen;