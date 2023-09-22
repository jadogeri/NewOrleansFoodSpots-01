import React, { useReducer } from "react";
import { FlatList, Text, View, Button, ImageBackground, TouchableOpacity } from "react-native"
import styles from './styles'
import FighterFullSizeImage from "../../components/images/FighterFullSize/FighterFullSizeImage";
import FighterIcon from "../../components/images/fighterSmallSize/FighterSmallSizeImage";
import switchFighterReducer from "../../reducers/fighterReducer/fighterReducer";
import abilitiesReducer from "../../reducers/fighterReducer/abilitiesReducer";
import fighters from "../../store/fighters/Fighters";
import AbilityLevelButtons from "../../components/buttons/AbilityLevel/AbilityLevel";
import LevelBanner from "../../components/labels/levelBanner/LevelBanner"
import NavButton from "../../components/buttons/Nav/NavButton";

let defaultLevels = {health:100,recovery:0,powergen:0,attack:0,toughness:0,totalPoints:0,maxPoints:0}
const CharacterScreen = (props) => {

    let playerPoints = props.navigation.getParam('value');
    let gameMode = props.navigation.getParam('mode');

    defaultLevels = {...defaultLevels, totalPoints:playerPoints, maxPoints:playerPoints}

    const [fighter, dispatch] = useReducer(switchFighterReducer, fighters[Math.floor(Math.random()*fighters.length)] );
    const [ability, abilityDispatch] = useReducer(abilitiesReducer, defaultLevels);

    return <View style={styles.container} >
        <ImageBackground style={styles.backgroundImage}
            source={require('../../../assets/mk_logo_background.gif')}>

<Text>random fighter = fighter == {fighter.name}</Text>

            <Text style={styles.headerText}>CHOOSE YOUR FIGHTER</Text>
            <Text>GAME MODE === {gameMode}</Text>
            <View style={styles.icon_container}>
                <View style={styles.board_container}>
                    <FighterFullSizeImage
                        source={fighter.big_image} />

                    <LevelBanner points={ability.totalPoints} />
                    <AbilityLevelButtons value={ability.health}
                        source={require('../../../assets/level/healthbanner.jpg')}
                        increase={() => { abilityDispatch({ type: 'health', payload: 5 }) }}
                        decrease={() => { abilityDispatch({ type: 'health', payload: -5 }) }} />
                    <AbilityLevelButtons value={ability.recovery} source={require('../../../assets/level/recoverybanner.jpg')}
                        increase={() => { abilityDispatch({ type: 'recovery', payload: 5 }) }} decrease={() => { abilityDispatch({ type: 'recovery', payload: -5 }) }} />
                    <AbilityLevelButtons value={ability.toughness} source={require('../../../assets/level/toughnessbanner.jpg')}
                        increase={() => { abilityDispatch({ type: 'toughness', payload: 5 }) }} decrease={() => { abilityDispatch({ type: 'toughness', payload: -5 }) }} />
                    <AbilityLevelButtons value={ability.attack} source={require('../../../assets/level/attackbanner.jpg')}
                        increase={() => { abilityDispatch({ type: 'attack', payload: 5 }) }} decrease={() => { abilityDispatch({ type: 'attack', payload: -5 }) }} />
                    <AbilityLevelButtons value={ability.powergen} source={require('../../../assets/level/powergenbanner.jpg')}
                        increase={() => { abilityDispatch({ type: 'powergen', payload: 5 }) }} decrease={() => { abilityDispatch({ type: 'powergen', payload: -5 }) }} />

                </View>
                <View style={styles.list_container}>
                    <FlatList numColumns={4}
                        data={fighters}
                        keyExtractor={(key) => { return key.key; }}
                        renderItem={({ item }) => {                            
                            return <TouchableOpacity onPress={() => {
                                abilityDispatch({ type:"clear"});
                                dispatch({ type: item.name, payload: item })
                            }}>
                                <FighterIcon source={item.small_image} />
                            </TouchableOpacity>
                        }}

                    />
                </View>
            </View>
            <Button title={ability.totalPoints !== 0 ? "USE ALL POINTS" : 'NEXT SCREEN'}
                   onPress={ability.totalPoints !== 0 ?  ()=> {}:()=> {props.navigation.navigate('Stage',{...fighter,...ability,shaokahn:gameMode})}}
         />
        </ImageBackground>

    </View>
}

export default CharacterScreen;