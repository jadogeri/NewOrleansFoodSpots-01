import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import AbilityLevelButtons from '../../buttons/AbilityLevel/AbilityLevel';

const AbilityBoard = (props)=>{
    return <View>
        <AbilityLevelButtons />
        <AbilityLevelButtons />
        <AbilityLevelButtons />
        <AbilityLevelButtons />

    </View>
}

export default AbilityBoard;