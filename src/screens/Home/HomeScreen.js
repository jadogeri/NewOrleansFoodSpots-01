import React from 'react';
import {View, Text, Button, Image} from 'react-native'
import styles from './styles';
import StartGameButton from '../../components/buttons/StartGame/StartGameButton';

const HomeScreen = (props) =>{

    return <View>

        <View style={styles.container}>
        <Image style={styles.icon}source={require('../../../assets/mortal_kombat_logo.gif')}/>
        <StartGameButton navigation={props.navigation}/>
        </View>
        
    </View>
}

export default HomeScreen;