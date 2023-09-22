import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

const LevelBannerHeader = (props)=>{
    return <View>
                <Text>total points {props.points}</Text>

        <Text> I am level banner </Text>

    </View>
}

export default LevelBannerHeader;